interface IAppointment {
    id: number;
    date: string;
    time: string;
    userId: string;
    status: "active" | "canceled"
}

export default IAppointment;