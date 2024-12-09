"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const envs_1 = require("./envs");
const User_1 = __importDefault(require("../entities/User"));
const Credential_1 = __importDefault(require("../entities/Credential"));
const Appointment_1 = __importDefault(require("../entities/Appointment"));
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: envs_1.DB_HOST,
    port: Number(envs_1.DB_PORT),
    username: envs_1.DB_USER,
    password: envs_1.DB_PASSWORD,
    database: envs_1.DB_NAME,
    synchronize: true,
    logging: ["error"],
    entities: [User_1.default, Credential_1.default, Appointment_1.default],
    subscribers: [],
    migrations: [],
});
