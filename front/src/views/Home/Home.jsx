import React from "react";
import foto1 from "../../assets/chiquis.jpg"
import styles from "./Home.module.css"

export default function Home() {
    return(
        <div className={styles.home}>
            <div className={styles.textContainer}>
                <h2>¡Bienvenido a nuestra veterinaria!</h2>
                <p>En nuestro espacio dedicado al cuidado de tus mascotas, nos enorgullece ofrecerte una atención integral que abarca desde los más jóvenes cachorros hasta los compañeros más "experimentados" de cuatro patas. En cada visita, nos comprometemos a brindar el amor, la atención y los cuidados necesarios para garantizar el bienestar y la salud de tus fieles amigos peludos.</p>
                <p>Nuestro equipo de profesionales altamente calificados está aquí para acompañarte en cada paso del camino, desde las primeras vacunas hasta los cuidados geriátricos, asegurando que tus mascotas reciban la mejor atención posible en todas las etapas de sus vidas.</p>
                <p>¡Gracias por confiar en nosotros para cuidar a tus seres queridos de la familia peluda! Estamos ansiosos por conocerte y por formar parte de la vida y la salud de tus mascotas.</p>
                <p>Bienvenido a nuestra familia de amantes de los animales.</p>
            </div>
            <div className={styles.imageContainer}>
                <img src={foto1} alt="foto1" className={styles.image}></img>
            </div>
        </div>
    )
}