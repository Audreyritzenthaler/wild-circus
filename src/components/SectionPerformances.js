import React from 'react';
import SectionType from './SectionTypePerf';


const theme = [
    {
        image : "",
        title : "Laugh",
        text : "As an adult, come and discover our irresistible clowns, between practical jokes and pranks let yourself be carried away by their joy and fall back into childhood."
    },
    {
        image : "",
        title : "Dream",
        text : "Let yourself be carried away in a world where the real and the imaginary are one, in the company of our talented magicians, discover a wonderful world limited only by your imagination."
    },
    {
        image : "",
        title : "Marvel at",
        text : "Tame the untameable in the company of our tamers, between roar and razor-sharp claws, watch these fierce felines turn into sweet kittens."
    }
]


const SectionPerformances = () => {
    return (
        theme.map(item => 
        <SectionType title={item.title} text={item.text} image={item.image}/>
        )
    )
}


export default SectionPerformances;