import React from "react";

import './Navbar.css';
import { FaLinkedin } from 'react-icons/fa'



function Navbar({ name, contact }) {
    return (
        <div className="navbarCont">
            <a className="nameNavbar">{name}</a>
            <div className="infoNavbar">
                <a className="SuperpowersNavbar" href="#Superpowers">Superpowers</a>
                <a className="contactNavbar" href="#contact">{contact}</a>
                <a href="https://www.linkedin.com/in/sebastian-arocena-geldenhuys-613155168/">
                    <FaLinkedin className="logoLinkedin" />
                </a>
            </div>

        </div>
    )
}

export default Navbar;