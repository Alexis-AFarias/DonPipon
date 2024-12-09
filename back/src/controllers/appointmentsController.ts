import { Request, Response } from "express"
import Appointment from "../entities/Appointment";
import { getAllAppointmentService, getAppointmentByIdService, scheduleAppointmentService, cancelAppointmentService } from "../services/appointmentService";

export const getAllAppointments = async (req: Request, res: Response) => {
    try {
        const allAppointments: Appointment[] = await getAllAppointmentService();
        res.status(200).json(allAppointments)        
    } catch (error: any) {
        res.status(404).json({message: error.message})
    }
};

export const getAppointmentById = async (req: Request, res: Response) => {
    const { appId } = req.params;
    try {
        const appointment = await getAppointmentByIdService(Number(appId));
        res.status(200).json(appointment);
    } catch (error: any) {
        res.status(404).json({message: error.message})
    }
};

export const schedule = async (req: Request, res: Response) => {
    const { date, time, userId, description} = req.body;
    try {
        const newAppointment: Appointment = await scheduleAppointmentService({
            date, time, userId, description
        });
        res.status(201).json(newAppointment);
    } catch (error: any) {
        res.status(400).json({message: error.message})
    }
};

export const cancel = async (req: Request, res: Response) => {
    const {appId} = req.params;
    try {
        await cancelAppointmentService(Number(appId));
        res.status(200).json({ message: "turno cancelado"});
    } catch (error: any) {
        res.status(404).json({message: error.message})
    }
};