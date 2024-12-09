import { DataSource } from "typeorm";
import { DB_HOST, DB_PASSWORD, DB_PORT, DB_USER, DB_NAME } from "./envs";
import User from "../entities/User";
import Credential from "../entities/Credential";
import Appointment from "../entities/Appointment";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
//  dropSchema: true,
    synchronize: true,
    logging: ["error"],
    entities: [User, Credential, Appointment],
    subscribers: [],
    migrations: [],
})