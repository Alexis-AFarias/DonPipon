import Appointment from "../entities/Appointment";
import User from "../entities/User";
import appointmentRepository from "../repositories/AppointmentRepository";
import userRepository from "../repositories/UserRepository";


interface ScheduleAppointmentDto {
    date: string;
    time: string;
    userId: number;
    description: string;
}

export const getAllAppointmentService = async (): Promise<Appointment[]> => {
    const allAppointments: Appointment[] = await appointmentRepository.find();
//   if(allAppointments.length === 0) throw Error("No hay turnos");
    return allAppointments;
};

export const getAppointmentByIdService = async (appId: number): Promise<Appointment> => {
    const appointment : Appointment | null = await appointmentRepository.findOneBy({
        id: appId
    });
    if(!appointment) throw Error("Turno no existe");
    return appointment;
};

export const scheduleAppointmentService = async (scheduleAppointmentDto: ScheduleAppointmentDto): Promise<Appointment> => {
    const newAppointment: Appointment = appointmentRepository.create(scheduleAppointmentDto);
    await appointmentRepository.save(newAppointment);

    const user: User | null = await userRepository.findOneBy({
        id: scheduleAppointmentDto.userId,
    });
    
    if(!user) throw Error ("Usuario no existe");
    newAppointment.user = user;

    await appointmentRepository.save(newAppointment);
    return newAppointment;
};


export const cancelAppointmentService = async (appId: number): Promise<void> => {
    const appointment: Appointment | null = await appointmentRepository.findOneBy({
        id: appId
    });
    if(!appointment) throw Error("turno no existe");
    appointment.status = "cancelled";
    await appointmentRepository.save(appointment);
};