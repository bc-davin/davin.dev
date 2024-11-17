import React from 'react';
import './navigation.css';

const Navigation: React.FC = () => {
    return (
        <div className = "container">
            <div className='title'> 
                <h1>Davin Meas</h1>
            </div>
            <nav className ="navigation">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <button className='resumeButton'>Resume</button>
        </div>
    );
};

export default Navigation;