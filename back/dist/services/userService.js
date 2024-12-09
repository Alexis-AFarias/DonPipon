"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserByCredentialId = exports.createUserService = exports.getUserByIdService = exports.getAllUsersService = void 0;
const credentialService_1 = require("./credentialService");
const UserRepository_1 = __importDefault(require("../repositories/UserRepository"));
const getAllUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    const allUsers = yield UserRepository_1.default.find({ relations: { appointments: true } });
    return allUsers;
});
exports.getAllUsersService = getAllUsersService;
const getUserByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const foundUser = yield UserRepository_1.default.findOne({
        where: { id }, relations: { appointments: true }
    });
    if (!foundUser)
        throw Error("Usuario no encontrado");
    return foundUser;
});
exports.getUserByIdService = getUserByIdService;
const createUserService = (createUserDto) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = yield UserRepository_1.default.create(createUserDto);
    const newCredential = yield (0, credentialService_1.createCredential)({
        username: createUserDto.username,
        password: createUserDto.password
    });
    yield UserRepository_1.default.save(newUser);
    newUser.credential = newCredential;
    UserRepository_1.default.save(newUser);
    return newUser;
});
exports.createUserService = createUserService;
const findUserByCredentialId = (credentialId) => __awaiter(void 0, void 0, void 0, function* () {
    const foundUser = yield UserRepository_1.default.findOneBy({
        credential: { id: credentialId }
    });
    return foundUser;
});
exports.findUserByCredentialId = findUserByCredentialId;
