import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserData } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"
import styles from "./Login.module.css";

const postuserlogin_url = "http://localhost:3000/users/login"


export default function Login(){
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const inicialStateUser = {
        username: "",
        password: "",
    };

    const [user, setUser] = useState(inicialStateUser);
    const [errors, setErrors] = useState(inicialStateUser);

const validateUser = ({username, password}) => {
    const errors = {};
    if(!username) errors.username = "Ingrese nombre de usuario";
    if(!password) errors.password = "Ingrese contraseña";
    return errors;
}

const handleSubmit = event =>{
    event.preventDefault();

    axios.post(postuserlogin_url, user)
        .then(data =>{
            dispatch(setUserData(data));
            alert("USUARIO INGRESANDO..");
            navigate("/home");
        })
       .catch((error) => alert(`ACCESO DENEGADO: ${error?.response?.data?.message}`));
};

const handleChange = event =>{
    const {value, name} = event.target;
    setUser({...user, [name]: value});

    setErrors(validateUser({...user, [name]: value}));
};

    return(
        <div>
            <h2 style={{fontSize:"35px", textAlign: "center"}}>LOGIN</h2>
            <form className={styles.cardContainer}onSubmit={handleSubmit}>  
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
                <div className={styles.buttoms}>
                <button type="submit" >ENVIAR</button>
                </div>
           </form>
           <Link to= "/register">
           <h3 style={{textAlign: "center"}}>Registrarse</h3>
           </Link>
        </div> 
    )
}