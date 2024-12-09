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
exports.cancelAppointmentService = exports.scheduleAppointmentService = exports.getAppointmentByIdService = exports.getAllAppointmentService = void 0;
const AppointmentRepository_1 = __importDefault(require("../repositories/AppointmentRepository"));
const UserRepository_1 = __importDefault(require("../repositories/UserRepository"));
const getAllAppointmentService = () => __awaiter(void 0, void 0, void 0, function* () {
    const allAppointments = yield AppointmentRepository_1.default.find();
    return allAppointments;
});
exports.getAllAppointmentService = getAllAppointmentService;
const getAppointmentByIdService = (appId) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = yield AppointmentRepository_1.default.findOneBy({
        id: appId
    });
    if (!appointment)
        throw Error("Turno no existe");
    return appointment;
});
exports.getAppointmentByIdService = getAppointmentByIdService;
const scheduleAppointmentService = (scheduleAppointmentDto) => __awaiter(void 0, void 0, void 0, function* () {
    const newAppointment = AppointmentRepository_1.default.create(scheduleAppointmentDto);
    yield AppointmentRepository_1.default.save(newAppointment);
    const user = yield UserRepository_1.default.findOneBy({
        id: scheduleAppointmentDto.userId,
    });
    if (!user)
        throw Error("Usuario no existe");
    newAppointment.user = user;
    yield AppointmentRepository_1.default.save(newAppointment);
    return newAppointment;
});
exports.scheduleAppointmentService = scheduleAppointmentService;
const cancelAppointmentService = (appId) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = yield AppointmentRepository_1.default.findOneBy({
        id: appId
    });
    if (!appointment)
        throw Error("turno no existe");
    appointment.status = "cancelled";
    yield AppointmentRepository_1.default.save(appointment);
});
exports.cancelAppointmentService = cancelAppointmentService;
