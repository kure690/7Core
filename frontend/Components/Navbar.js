import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">React</Link>
                    <ul className="nav-item">
                        <li className="nav-item">
                            <Link to="/" className="nav-links">About us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-links">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-links">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-links">Home</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;