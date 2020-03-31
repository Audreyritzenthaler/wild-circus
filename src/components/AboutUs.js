import React from 'react';
import './AboutUs.css';

const AboutUs = (props) => {
    return (
        <div className="mainAbout">
            <h3>{props.title}</h3>
            <p>{props.textAboutUs}</p>
        </div>
    )
}



export default AboutUs;