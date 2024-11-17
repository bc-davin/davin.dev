import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import './contact.css';
const Contact: React.FC = () => {
    return (
        <div className="contactContainer">
            <h1 className="contactTile">Contact</h1>
            <p className="contactText">Connect with me on </p>
            <div className="contactLink"> 
                <a href="https://www.linkedin.com/in/davin-m-50a0b8210/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={30} />
                </a>
                <a href="https://github.com/bc-davin" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={30} />
                </a>
            </div>
        </div>
    );
}

export default Contact;