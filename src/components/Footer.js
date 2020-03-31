import React from 'react';
import './Footer.css';

const logo = [ "https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/online_social_media_facebook-512.png",
                "https://cdn2.iconfinder.com/data/icons/black-white-social-media/64/social_media_logo_github-512.png",
                "https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/instagram_online_social_media_photo-512.png",
                "https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/twitter_online_social_media-512.png"
]

const Footer = () => {
    return (
        <ul>
            <li>
                <img src={logo[0]} />
            </li>
            <li>
                <img src={logo[1]} />
            </li>
            <li>
                <img src={logo[2]}/>
            </li>
            <li>
                <img src={logo[3]}/>
            </li>
        </ul>
    )
}





export default Footer;