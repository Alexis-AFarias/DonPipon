import React from "react";
import styles from "./NavBar.module.css" 
import logo from "../../assets/logo.png"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setUserData } from "../../redux/userSlice"

export default function NavBar() {

   const login = useSelector(state => state.actualUser.userData.data);

   const dispatch = useDispatch();
   const navigate = useNavigate();

    const handleLogout = () =>{
        if(window.confirm("¿Desea cerrar sesion?"))
            {
                dispatch(setUserData({}));
                navigate("/");
            }
        }

    return(
    <div className={styles.navbarContainer}>
        <div className={styles.logo}>
            <Link to={"/home"}>
                <img src={logo} alt="logo" style={{width: "150px", height: "150px"}}></img>
            </Link>
        </div>
        <div className={styles.links}>
            <h1 style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }}>DON PIPON</h1>
                    <NavLink to= "/home">
                         <span>HOME</span>
                    </NavLink>
                    {
                        login &&
                            <NavLink to= "/appointments">
                                <span>RESERVAS</span>
                            </NavLink>
                    }
                    {
                        login &&
                            <NavLink to="/appointmentform">
                                <span>NUEVA RESERVA</span>
                            </NavLink>                    
                    }
                    <NavLink to= "/acercade">
                        <span>ACERCA DE</span>
                    </NavLink>
                    <NavLink to= "/contact">
                        <span>CONTACTO</span>
                    </NavLink>
                    {
                        login ?
                        <span style={{ textDecoration: 'none', color: 'darkgreen', cursor: 'pointer' }} onClick={handleLogout}>LOGOUT</span>
                        :   <NavLink to="/login">
                                <span>LOGIN</span>
                            </NavLink>
                    }
        </div>
    </div>
    )
}