"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../config/data-source");
const Appointment_1 = __importDefault(require("../entities/Appointment"));
const appointmentRepository = data_source_1.AppDataSource.getRepository(Appointment_1.default);
exports.default = appointmentRepository;
