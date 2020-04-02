import React from 'react';
import Prices from './Prices';

const MyPrices = [
    {
        logo : "https://cdn2.iconfinder.com/data/icons/people-80/96/Picture22-512.png",
        title : "Adults",
        priceWeekOutW : "15€",
        priceWeekEndAndW : "20€",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    },
    {
        logo : "https://cdn2.iconfinder.com/data/icons/people-80/96/Picture18-512.png",
        title : "Children -12 years old",
        priceWeekOutW : "10€",
        priceWeekEndAndW : "15€",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    },
    {
        logo : "https://cdn2.iconfinder.com/data/icons/people-80/96/Picture3-512.png",
        title : "Group + 10 people",
        priceWeekOutW : "140€",
        priceWeekEndAndW : "180€",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    },
    {
        logo : "https://cdn4.iconfinder.com/data/icons/education-and-school-glyph-24-px/24/Building_real_estate_school_school_building_university-512.png",
        title : "School",
        priceWeekOutW : "180€",
        priceWeekEndAndW : "200€",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    },
];


const PricesList = () => {
    return (
        MyPrices.map(MyPrice =>
           <Prices logo={MyPrice.logo} title={MyPrice.title} priceWeekOutW={MyPrice.priceWeekOutW} priceWeekEndAndW={MyPrice.priceWeekEndAndW} description={MyPrice.description} /> )
    )
}




export default PricesList;