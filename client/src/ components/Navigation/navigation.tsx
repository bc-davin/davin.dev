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
                    <li>About Me</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <div className='containerButton'>
            <button className='resumeButton'>Resume</button>
            </div>
           
        </div>
    );
};

export default Navigation;