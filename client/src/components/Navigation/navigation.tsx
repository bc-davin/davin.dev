import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

const Navigation: React.FC = () => {
    return (
        <div className = "container">
            <div className='title'> 
                <h1>Davin Meas</h1>
            </div>
            <nav className ="navigation">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Me</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <div className='containerButton'>
            <button className='resumeButton'>Resume</button>
            </div>
           
        </div>
    );
};

export default Navigation;