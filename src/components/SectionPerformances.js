import React from 'react';
import SectionType from './SectionTypePerf';


const theme = [
    {
        image : "https://visionofcolour.com/wp-content/uploads/2019/12/myrtle-corbin-4-legged-freak.jpg",
        title : "Laugh",
        text : "As an adult, come and discover our irresistible clowns, between practical jokes and pranks let yourself be carried away by their joy and fall back into childhood."
    },
    {
        image : "https://i.pinimg.com/originals/e7/c9/72/e7c9723bd6704ff3f380543cd19b0905.jpg",
        title : "Dream",
        text : "Let yourself be carried away in a world where the real and the imaginary are one, in the company of our talented magicians, discover a wonderful world limited only by your imagination."
    },
    {
        image : "https://i.imgur.com/5dA1MYu.png",
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