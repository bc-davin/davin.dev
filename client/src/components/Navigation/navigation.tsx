import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

const Navigation: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const openResume = () => {
        window.location.href = 'https://drive.google.com/file/d/1bdt8e-NM0Hq3rgQem2pS-arM2RTJWqOa/view';
    };

    return (
        <div className="container">
            <div className="title">
                <h1>Davin Meas</h1>
            </div>
                <button className="hamburger" onClick={toggleMenu} aria-label="Toggle navigation menu">
                    &#9776;
                </button>
                <nav className={`navigation ${menuOpen ? 'open' : ''}`} aria-label="Main Navigation">
                    <ul>
                        <li><NavLink end to="/" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setMenuOpen(false)}>Home</NavLink></li>
                        <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setMenuOpen(false)}>About Me</NavLink></li>
                        <li><NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setMenuOpen(false)}>Projects</NavLink></li>
                        <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
                    </ul>
                    <div className="containerButton">
                    <button className="resumeButton" onClick={openResume} aria-label="View Resume">
                        Resume
                    </button>
                </div>
                </nav>
        </div>
    );
};

export default Navigation;
