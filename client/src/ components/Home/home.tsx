import React from "react";
import "./home.css";

const Home: React.FC = () => {
    return (
        <div className="homeContainer">
            <div className="containerLeft">
                <div>
                    <h1>Hi, I am Davin</h1>
                </div>
                <div className="contentInfo">
                    <p>I currently work at the University of Alberta as a Software Developer.</p>
                    <p>I studied Computer Science at University of Alberta and previously intern at PCL Construction inc.</p>
                    <p>My specialties include database design, API development, server management, quickly learning new technologies and frameworks, Model View Controller (MVC) codebase design, and working on a team with people from different development roles.</p>
                </div>
            </div>
            <div className="containerRight">
                <img src="https://avatars.githubusercontent.com/u/71451687?v=4" alt="Davin Meas" />
            </div>
        </div>
    );
}

export default Home;
