import { createCredential } from "./credentialService";
import User from "../entities/User";
import Credential from "../entities/Credential";
import userRepository from "../repositories/UserRepository";

interface createUserDto {
    name: string,
    email: string,
    birthdate: string,
    nDni: string,
    username: string,
    password: string
}

export const getAllUsersService = async (): Promise<User[]> => {
    const allUsers: User[] = await userRepository.find({relations: {appointments: true}});
    return allUsers;
};


export const getUserByIdService = async (id: number): Promise<User> => {
    const foundUser: User | null = await userRepository.findOne({
        where: {id}, relations:{appointments: true}
    })
    if(!foundUser) throw Error("Usuario no encontrado");
    return foundUser;
};


export const createUserService = async (
    createUserDto: createUserDto
): Promise<User> => {
    const newUser: User = await userRepository.create(createUserDto);
    const newCredential: Credential = await createCredential({
        username: createUserDto.username,
        password: createUserDto.password
    });
    await userRepository.save(newUser);
    newUser.credential = newCredential;
    userRepository.save(newUser);

    return newUser;
};


export const findUserByCredentialId = async (credentialId: number): Promise<User | null> => {
    const foundUser: User | null = await userRepository.findOneBy({
        credential:{ id: credentialId }
    });
    
    return foundUser;
};
