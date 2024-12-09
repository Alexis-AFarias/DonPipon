import { Router } from "express";
import usersRouter from "./usersRouter";
import appointmentRouter from "./appointmentsRouter";

const indexRouter = Router();

indexRouter.use("/users", usersRouter);
indexRouter.use("/appointments", appointmentRouter);

export default indexRouter;