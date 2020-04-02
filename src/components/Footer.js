import React from 'react';
import './Footer.css';


const Footer = (props) => {
    return (
        <li className="logos">
            <a href={props.link}><img src={props.logoSocial} alt={props.alt}></img></a>
        </li>
    )
}



export default Footer;