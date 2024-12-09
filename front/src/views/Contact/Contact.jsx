import React from "react";
import styles from "./Contact.module.css"

export default function Contact() {
    return(
        <div className={styles.contactContainer}>
            <h2 className={styles.contactTitle}>¡Contáctanos!</h2>
            <p>Estamos aquí para ayudarte con cualquier pregunta o inquietud que tengas sobre el cuidado de tus mascotas. No dudes en comunicarte con nosotros a través de los siguientes medios:</p>
            <div >
                <div>
                    <h3>Dirección:</h3>
                    <p>--Calle Principal 1234</p>
                    <p>--Ciudad, Provincia</p>
                    <p>--Código Postal: 12345</p>
                </div>
                <div>
                    <h3>Teléfono:</h3>
                    <p>--(123) 456-7890</p>
                </div>
                <div>
                    <h3>Correo Electrónico:</h3>
                    <p>--info@donpipon.com</p>
                </div>
                <div>
                    <h3>Horario de Atención:</h3>
                    <p>--Lunes - Domingos: 7:00 AM - 14:00 PM y 16:00 PM - 22:00 PM</p>
                </div>
            </div>
    </div>
    )
}