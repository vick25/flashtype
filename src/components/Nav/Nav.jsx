import React from "react";
import "./Nav.css";
import logo from "./../../assets/logo.png"

const Nav = () => {
    return (
        <div className="nav-container">
            <div className="nav-left">
                <img className="flash-logo" src={logo} alt="logo" />
                <p className="flash-logo-text">FlashType</p>
            </div>
            <div className="nav-right">
                <a href="https://rfi.fr" target="_blank" className="nav-link" rel="noreferrer">
                    Vick
                </a>
            </div>
        </div>
    )
}
export default Nav;