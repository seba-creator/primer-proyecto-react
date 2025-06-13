import React from "react";

import './Navbar.css';
import { FaLinkedin } from 'react-icons/fa'


export default Navbar;



function Navbar({ name, contact }) {
    return (
        <div className="navbarCont">
            <a className="nameNavbar">{name}</a>
            <div className="infoNavbar">
                <a href="https://www.linkedin.com/in/sebastian-arocena-geldenhuys-613155168/">
                    <FaLinkedin className="logoLinkedin" />
                </a>
                <a className="SuperpowersNavbar" href="#Superpowers">Superpowers</a>
                <a className="contactNavbar" href="#contact">{contact}</a>
            </div>

        </div>
    )
}