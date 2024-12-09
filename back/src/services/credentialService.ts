import Credential from "../entities/Credential";
import ICredentialDto from "../interfaces/ICredentialDto";
import credentialRepository from "../repositories/CredentialRepository";

interface createCredentialDto {
    username: string;
    password: string;
}

interface validateCredentiualDto{
    username: string;
    password: string;    
}

export const createCredential = async (createCredentialDto: ICredentialDto): Promise<Credential> => {
    const newcredential: Credential = credentialRepository.create(createCredentialDto);
    await credentialRepository.save(newcredential);
    return newcredential;
};

export const validateCredential = async (validateCredentiualDto: ICredentialDto): Promise<Credential> => {
    const {username, password} = validateCredentiualDto;
    const foundCredential: Credential | null = await credentialRepository.findOneBy({username});
    if(!foundCredential) throw Error("usuario no encontrado");
    if(password !== foundCredential.password) throw Error("password incorrecta");
    return foundCredential;
}
