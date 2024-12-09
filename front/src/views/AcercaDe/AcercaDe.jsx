import React from "react";
import foto2 from "../../assets/grandecitos.jpg"
import styles from "./AcercaDe.module.css"

export default function AcercaDe() {
    return(
        <div className={styles.acerca}>
        <div className={styles.imageContainer}>
          <img src={foto2} alt="foto1" className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h2>¡Bienvenidos/as!</h2>
          <p>
            En "Don Pipón", nos apasiona el cuidado y el bienestar de todas las mascotas que entran por nuestras puertas. Fundada en 2023, nuestra clínica se ha comprometido a proporcionar la más alta calidad de atención veterinaria en Buenos Aires, brindando servicios que van desde exámenes de rutina hasta tratamientos especializados.
          </p>
          <p>
            En nuestro equipo, contamos con un grupo de veterinarios dedicados y personal capacitado que comparten una misma pasión por los animales. Nos esforzamos por crear un ambiente acogedor y compasivo para nuestros pacientes y sus familias humanas, asegurando que cada visita sea lo más cómoda y tranquilizadora posible.
          </p>
          <p>
            Nuestra misión es promover la salud y el bienestar animal a través de la educación, la prevención y el tratamiento de enfermedades. Nos enorgullece ofrecer servicios médicos actualizados y tecnología de vanguardia para garantizar que tus mascotas reciban la mejor atención posible.
          </p>
          <p>
            En "Don Pipón", nos consideramos parte de la comunidad y nos comprometemos a contribuir positivamente a su bienestar general. Desde programas de adopción hasta eventos comunitarios, nos esforzamos por ser un recurso confiable y solidario para todos los amantes de los animales en nuestra área.
          </p>
          <p>
            ¡Gracias por confiar en nosotros para el cuidado de tus queridos compañeros peludos! Estamos emocionados de conocerte y de formar parte de la vida y la salud de tus mascotas.
          </p>
          <p>
            ¡Bienvenido a nuestra familia de amantes de los animales!
          </p>
        </div>
      </div>
    )
}