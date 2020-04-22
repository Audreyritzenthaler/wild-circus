import React from 'react';
import './SectionPerformances.css';

const SectionType = (props) => {
    return (
            <div className="cards">
                    <img className ="imgPerf" src={props.image}/>
                    <div className="divPerf">
                        <h4>{props.title}</h4>
                        <p className="textuel" >{props.text}</p>
                    </div>
            </div>
    )
}

export default SectionType;