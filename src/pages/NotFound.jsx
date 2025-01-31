import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div
            className="notfound"
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                textAlign: 'center',
                color: "#3056df",
            }}
        >
            <h1>ERROR 404</h1>
            <h3>Эта страница не существует.</h3>
            <Link style={{
                margin: "1rem",
            }} className="btn-hire-nav" to="/main-page">Return</Link>
        </div>
    );
};

export default NotFound;
