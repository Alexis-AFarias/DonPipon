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
exports.validateCredential = exports.createCredential = void 0;
const CredentialRepository_1 = __importDefault(require("../repositories/CredentialRepository"));
const createCredential = (createCredentialDto) => __awaiter(void 0, void 0, void 0, function* () {
    const newcredential = CredentialRepository_1.default.create(createCredentialDto);
    yield CredentialRepository_1.default.save(newcredential);
    return newcredential;
});
exports.createCredential = createCredential;
const validateCredential = (validateCredentiualDto) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = validateCredentiualDto;
    const foundCredential = yield CredentialRepository_1.default.findOneBy({ username });
    if (!foundCredential)
        throw Error("usuario no encontrado");
    if (password !== foundCredential.password)
        throw Error("password incorrecta");
    return foundCredential;
});
exports.validateCredential = validateCredential;
