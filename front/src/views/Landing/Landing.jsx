import React from "react";
import {Link} from "react-router-dom"
import styles from "./Landing.module.css"
import fondo from "../../assets/catdog.jpg"

export default function Landing() {
    return(
        <div className={styles.fondo}>
            <div className={styles.cardContainer}>
                <h1>Bienvenido/a</h1>
                <h2>¿Es tu primera vez con nosotros?</h2>
                <Link to="/register">
                    <span>REGISTRATE AQUI</span>
                </Link>
                <h2>¿Ya te has atendido?</h2>
                <Link to="/login">
                    <span>INGRESA ACÁ</span>
                </Link>
            </div>
        </div>
    )
}