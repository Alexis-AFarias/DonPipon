import React, { useState } from "react";
import axios from "axios";
import {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import styles from "./appointmentForm.module.css"

const postappointment_url = "http://localhost:3000/appointments/schedule";

export default function AppointmentForm() {

    const navigate = useNavigate();
    
    const userId = useSelector(state => state.actualUser.userData.data.user.id)

    const inicialStateUser = {
        date: "",
        hours: "08",
        minutes: "00",
        description: "",
    };

const [appointment, setAppointment] = useState(inicialStateUser);
const [errors, setErrors] = useState(inicialStateUser);

const validateAppointment = ({date, description}) => {
    const errors = {};
    if(!description) errors.description = "Ingrese descripcion";
    else if(description.length < 4)
    errors.description = "Debe ser de al menos 4 caracteres";
    else if(description.length > 50)
    errors.description = "Debe ser de maximo 50 caracteres";
    return errors;
};

const handleSubmit = event =>{
    event.preventDefault();

    const newAppointment = {
        date: appointment.date,
        time: `${appointment.hours}:${appointment.minutes}`,
        description: appointment.description,
        userId
    }

    axios.post(postappointment_url, newAppointment)
        .then(({data}) => data)
        .then(appointmentDB => {
            alert(`SE CREO EL TURNO, FECHA: ${appointmentDB.date}, HORA: ${appointmentDB.time}`);
            navigate("/appointments")
        })
        .catch(error => alert(error.message))
};

const handleChange = event =>{
    const {value, name} = event.target;
    setAppointment({...appointment, [name]: value});

    setErrors(validateAppointment({...appointment, [name]: value}));
};

const validHours = [
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21"
];

const validMinutes = ["00", "30"];

function TurnDateInit(){
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate()+1);
    return tomorrow.toISOString().split("T")[0];
}

function TurnDateEnd() {
    const today = new Date();
    const threeMonths = new Date(today);
    threeMonths.setMonth(threeMonths.getMonth()+3);
    return threeMonths.toISOString().split("T")[0];
}
    return(
        <div >
            <h2 style={{fontSize:"35px", textAlign: "center"}}>NUEVO TURNO</h2>
            <form className={styles.cardContainer} onSubmit={handleSubmit}>
                <label  htmlFor="date">Fecha: </label>
                <input 
                    type="date"
                    id= "date"
                    name= "date"
                    min={TurnDateInit()}
                    max={TurnDateEnd()}
                    value={appointment.date}
                    onChange={handleChange}
                />
                <br></br>
                <div className={styles.formGroup}>
                <label htmlFor="time">Horario: </label>
                <select 
                    id= "hours"
                    name= "hours"
                    value={appointment.hours}
                    onChange={handleChange}
                >
                {
                    validHours.map((hour) => (
                        <option key={hour} value={hour}>
                            {hour}
                        </option>
                    ))
                }
                </select>
                <select
                id= "minutes"
                name= "minutes"
                value={appointment.minutes}
                onChange={handleChange}                >
                {
                    validMinutes.map((minute) => (
                        <option key={minute} value={minute}>
                            {minute}
                        </option>
                    ))
                }
                </select>
                </div>
                <br></br>

                <label htmlFor="description">Description: </label>
                <input 
                    type="text"
                    id= "description"
                    name= "description"
                    value={appointment.description}
                    onChange={handleChange}
                    placeholder="Ingrese descripcion..."
                />
                {
                    errors.description && <span style={{color: "red"}}>{errors.description}</span>
                }
                <br></br>
                <button type="submit" >Crear Turno</button>
            </form>
        </div> 
    )
}