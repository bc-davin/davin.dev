import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

const Navigation: React.FC = () => {
    const openResume = () => {
        window.open('/path-to-resume.pdf', '_blank');
    };
    return (
        <div className="container">
            <div className="title">
                <h1>Davin Meas</h1>
            </div>
            <nav className="navigation" aria-label="Main Navigation">
                <ul>
                    <li><NavLink end to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
                    <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About Me</NavLink></li>
                    <li><NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink></li>
                    <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
                </ul>
            </nav>
            <div className="containerButton">
                <button className="resumeButton" onClick={openResume} aria-label="View Resume">
                        Resume
                </button>
            </div>
        </div>
    );
};

export default Navigation;
