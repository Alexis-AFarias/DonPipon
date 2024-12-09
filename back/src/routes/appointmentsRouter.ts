import { Router } from "express";
import { cancel, getAllAppointments, getAppointmentById, schedule } from "../controllers/appointmentsController";

const appointmentRouter = Router();

appointmentRouter.get("/", getAllAppointments);
appointmentRouter.get("/:appId", getAppointmentById);
appointmentRouter.post("/schedule", schedule);
appointmentRouter.put("/cancel/:appId", cancel);

export default appointmentRouter;