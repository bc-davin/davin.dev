import React from "react";
import ImageStack from "../../components/ImageStack/imageStack";
import "./about.css";

const About: React.FC = () => {
    return (
        <div className="aboutContainer">
            <h1>About Me</h1>
            <p>Greetings from Edmonton, Alberta! When I'm not chasing trails, conquering hikes, or dreaming up my next big software project, you’ll probably find me exploring the beauty around me—always with a smile 😊.</p>
            <div className="imageStackContainer">
                <ImageStack />
            </div>
            <h2>Skills</h2>
            <ul className="skillsList">
                <li><strong>Languages:</strong> Python, JavaScript, Java, TypeScript, HTML, CSS, C#, Go</li>
                <li><strong>Frameworks:</strong> Django, React, Express.JS, ASP.NET Core, Gins, Java Spring Boots</li>
                <li><strong>Databases:</strong> PostgreSQL, MongoDB, SQL, GraphQL, AWS, GCP</li>
                <li><strong>Other Tools and Methodologies:</strong> Docker, Git, Linux, Jenkins</li>
            </ul>
        </div>
    );
}

export default About;