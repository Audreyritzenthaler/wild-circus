import React from 'react';
import './AboutUs.css';

const AboutUs = (props) => {
    return (
        <div className="mainAbout">
            <div className="image">
                <img className="imgAbout" src={props.image}/>
            </div>
            <div className="textAboutUs">
                <h3>{props.title}</h3>
                <p>{props.textAboutUs}</p>
            </div>
        </div>
    )
}



export default AboutUs;