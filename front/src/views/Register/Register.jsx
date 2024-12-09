import React, { useState } from "react";
import axios from "axios";
import styles from "./Register.module.css"

const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const postuser_url = "http://localhost:3000/users/register"

export default function Register(){

const inicialStateUser = {
    id: "",
    name: "",
    email: "",
    birthdate: "",
    nDni: "",
    username: "",
    password: "",
    passwordconfirm: "",
};

const [user, setUser] = useState(inicialStateUser);
const [errors, setErrors] = useState(inicialStateUser);


const validateUser = ({name, email, birthdate, nDni, username, password, passwordconfirm,}) => {
    const errors = {};
    if(!name) errors.name = "Ingrese nombre";
    if(!email) errors.email = "Ingrese email";
        else{
            if(!emailRegExp.test(email)) errors.email = "Email invalido";
        }
    if(!birthdate) errors.birthdate = "Ingrese Fecha de Nacimiento";
    if(!nDni) errors.nDni = "Ingrese DNI";
    if(!username) errors.username = "Ingrese nombre de usuario";
    if(!password) errors.password = "Ingrese contraseña";
    if(password !== passwordconfirm) errors.passwordconfirm = "Las contraseñas deben ser iguales";

    return errors;
}

const handleSubmit = event =>{
    event.preventDefault();

    const newUser = {
        name: user.name, 
        email: user.email, 
        birthdate: user.birthdate, 
        nDni: user.nDni, 
        username: user.username, 
        password: user.password
    }

    axios.post(postuser_url, newUser)
        .then(({data}) => data)
        .then(userDB => {
            alert("SE CREO EL USUARIO " + userDB.name);
            setUser(inicialStateUser);
        })
        .catch(error => alert(error.message))

};

const handleChange = event =>{
    const {value, name} = event.target;
    setUser({...user, [name]: value});

    setErrors(validateUser({...user, [name]: value}));
};

const handleReset = event =>{
    event.preventDefault();
    setUser(inicialStateUser)
};

    return(
        <div>
            <h2 style={{fontSize:"35px", textAlign: "center"}} >REGISTER</h2>
            <form className={styles.cardContainer} onSubmit={handleSubmit}>
            <div className={styles.elements}>
                <label htmlFor="name">Nombre: </label>
                <input 
                    type="text"
                    id= "name"
                    name= "name"
                    value={user.name}
                    onChange={handleChange}
                    placeholder="Ingrese Nombre..."
                />
                {
                    errors.name && <span style={{color: "red"}}>{errors.name}</span>
                }
                </div>
                <div className={styles.elements}>
                <label htmlFor="email">Email: </label>
                <input 
                    type="text"
                    id= "email"
                    name= "email"
                    value={user.email}
                    onChange={handleChange}
                    placeholder="Ingrese Email..."
                />
                {
                    errors.email && <span style={{color: "red"}}>{errors.email}</span>
                }
                </div>                
                <label htmlFor="birthdate">Fecha de Nacimniento: </label>
                <input 
                    type="date"
                    id= "birthdate"
                    name= "birthdate"
                    value={user.birthdate}
                    onChange={handleChange}
                    placeholder="Ingrese Fecha de nacimiento..."
                />
                {
                    errors.birthdate && <span style={{color: "red"}}>{errors.birthdate}</span>
                }
                <div className={styles.elements}>
                <label htmlFor="nDni">Dni: </label>
                <input 
                    type="text"
                    id= "nDni"
                    name= "nDni"
                    value={user.nDni}
                    onChange={handleChange}
                    placeholder="Ingrese DNI..."
                />
                {
                    errors.nDni && <span style={{color: "red"}}>{errors.nDni}</span>
                }              
                </div>
                <div className={styles.elements}>                
                <label htmlFor="username">Nombre de usuario: </label>
                <input 
                    type="text"
                    id= "username"
                    name= "username"
                    value={user.username}
                    onChange={handleChange}
                    placeholder="Ingrese nombre de usuario..."
                />
                {
                    errors.username && <span style={{color: "red"}}>{errors.username}</span>
                }                
                </div>
                <div className={styles.elements}>                
                <label htmlFor="password">Contraseña: </label>
                <input 
                    type="password"
                    id= "password"
                    name= "password"
                    value={user.password}
                    onChange={handleChange}
                    placeholder="Ingrese contraseña..."
                />
                {
                    errors.password && <span style={{color: "red"}}>{errors.password}</span>
                }                
                </div>
                <div className={styles.elements}>                                
                <label htmlFor="passwordconfirm">Confirmar Contraseña: </label>
                <input 
                    type="password"
                    id= "passwordconfirm"
                    name="passwordconfirm"
                    value={user.passwordconfirm}
                    onChange={handleChange}
                    placeholder="Confirmar contraseña..."
                />
                {
                    errors.passwordconfirm && <span style={{color: "red"}}>{errors.passwordconfirm}</span>
                }
                </div>
                <div className={styles.buttoms}>
                <button type="submit" disabled={Object.keys(errors).length !== 0}>
                    ENVIAR
                    </button>
                </div>
                <div className={styles.buttoms}>
                <button onClick={handleReset}>BORRAR FORMULARIO</button>
                </div>
            </form>
        </div> 
    )
}