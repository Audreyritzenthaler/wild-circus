import React from 'react';
import './AboutUs.css';

const AboutUs = (props) => {
    return (
        <div className="mainAbout">
            <div className="image">
                <img src={props.image}/>
            </div>
            <div>
                <h3>{props.title}</h3>
                <p>{props.textAboutUs}</p>
            </div>
        </div>
    )
}



export default AboutUs;