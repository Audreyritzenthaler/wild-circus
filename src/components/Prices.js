import React from 'react';
import './Prices.css';


const Prices = (props) => {
    return (
        <div className="mytab">
                <img className="logoPrice" src={props.logo}/>
                <h5>{props.title}</h5>
                <p className="description">{props.description}</p>
                <p className="price">{props.priceWeekOutW}</p>
                <p className="price">{props.priceWeekEndAndW}</p>
                <button className="buttonShop" >Shop Now !</button>
        </div>
    )
}




export default Prices;