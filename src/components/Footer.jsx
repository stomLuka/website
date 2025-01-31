import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import "../styles/Footer.css";
import logo from "../assets/Logo.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-nav">
                    <Link className="footer-btn" to="/documents">Документы</Link>
                    <Link className="logo-btn" to="/main-page">
                        <img src={logo} alt="Логотип" className="footer-logo" />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
