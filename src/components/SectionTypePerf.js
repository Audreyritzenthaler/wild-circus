import React from 'react';
import './SectionPerformances.css';

const SectionType = (props) => {
    return (
        <div className="cards">
            <img src={props.image}/>
            <div>
                <h4>{props.title}</h4>
                <p className="textuel" >{props.text}</p>
            </div>
        </div>
    )
}

export default SectionType;