import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import "../styles/Header.css";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="header" id="top">
            <div className="header-container">
                <nav className="header-nav">
                    <div>
                        <Link className="nav-logo" to="/main-page">Стоматология <br /> "Линия улыбки"</Link>
                    </div>

                    <div className="title">
                        <div className="burger-menu" onClick={toggleMenu}>
                            <div className="burger-line"></div>
                            <div className="burger-line"></div>
                            <div className="burger-line"></div>
                        </div>
                        <div className={`dropdown-menu ${isMenuOpen ? 'active' : ''}`} ref={menuRef}>
                            <Link to="/main-page" onClick={closeMenu}>ГЛАВНАЯ</Link>
                            <Link to="/information" onClick={closeMenu}>ИНФОРМАЦИЯ</Link>
                            <Link to="/personnel" onClick={closeMenu}>ВРАЧИ</Link>
                            <Link to="/services-and-prices" onClick={closeMenu}>ПРЕЙСКУРАНТ</Link>
                            <Link to="/contacts" onClick={closeMenu}>КОНТАКТЫ</Link>
                            <Link to="/license" onClick={closeMenu}>ЛИЦЕНЗИЯ</Link>
                            <Link to="/documents" onClick={closeMenu}>ДОКУМЕНТЫ</Link>
                        </div>
                    </div>
                </nav>
            </div >
        </header >
    );
};

export default Header;
