import React, { useEffect, useState } from "react";
import AppointmentCard from "../../components/appointmentCard/appointmentCard";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUserAppointments } from "../../redux/userSlice"

const getuserbyid_url = "http://localhost:3000/users/"
const cancel_url = "http://localhost:3000/appointments/cancel/";

export default function Appointments() {

        const actualUserId = useSelector(state => state.actualUser.userData.data.user.id);

        const appointments = useSelector(state => state.actualUser.userAppointments);

        const dispatch = useDispatch();

    useEffect(() =>{
        axios.get (getuserbyid_url + actualUserId)
        .then(response => response.data.appointments)
        .then(appointments => dispatch(setUserAppointments(appointments)))
        .catch(error => console.log(error.message))
    }, []);


    const handleAppointmentCancel = (appointmentId) => {
        axios
        .put(cancel_url + appointmentId)
        .then(response => response.data)
        .then(data => {
            axios
            .get (getuserbyid_url + actualUserId)
            .then((response) => response.data.appointments)
            .then((appointments) => dispatch(setUserAppointments(appointments)))
            .catch((error) => console.log(error.message))
        })
        .catch(error => alert("ERROR al cancelar reserva: "+ error?.response?.data?.message))
    }

    return(
        <div>
            <h1 style={{textAlign:"center", fontSize:"35px"}}>MIS TURNOS</h1>
            {
                appointments.length ?
                
                appointments.map(appointment => (
                    <AppointmentCard
                        key={appointment.id}
                        id= {appointment.id}
                        date= {appointment.date}
                        time= {appointment.time}
                        status= {appointment.status}
                        description= {appointment.description}
                        handleAppointmentCancel={handleAppointmentCancel}
                    />
                ))
                : <h1>NO HAY RESERVAS...</h1>
            }
        </div>
    )
}
