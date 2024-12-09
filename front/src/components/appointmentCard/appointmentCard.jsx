import React from "react"; 
import styles from "./appointmentCard.module.css"
export default function AppointmentCard({id, date, time, status, description, handleAppointmentCancel}) 
{
    date = new Date(date);
    const formatDate = `
        ${date.getDate()} / 
        ${date.getMonth() + 1} /
        ${date.getFullYear()}`
        ;

   const handleClick = () => {
        if(
            window.confirm("¿Desea cancelar este turno?"))
            {
                handleAppointmentCancel(id);
            }
        }

    return(
        <div className={styles.cardContainer}>
            <span>{formatDate}</span>
            <span>{time} HS</span>
            <span>{description}</span>
            {
                status==="active" ? (
                    <span className={styles.active} onClick={handleClick}>
                        ACTIVO (cancelar)
                    </span>
                ) : (
                    <span className={styles.cancelled}>CANCELADO</span>
                )
            }
            <span>{status}</span>
        </div>
        );
    }