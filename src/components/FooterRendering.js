import React from 'react';
import Footer from './Footer';

const logos = [
    {
        logoSocial : "https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/online_social_media_facebook-512.png",
        alt : "logo facebook",
        link : "https://www.facebook.com/audrey.ritzenthaler.9"
    },
    {
        logoSocial : "https://cdn2.iconfinder.com/data/icons/black-white-social-media/64/social_media_logo_github-512.png",
        alt : "logo github",
        link : "https://github.com/Audreyritzenthaler"
    },
    {
        logoSocial : "https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/instagram_online_social_media_photo-512.png",
        alt : "logo instagram",
        link : "https://www.instagram.com/audreyritzenthaler/"
    },
    {
        logoSocial : "https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/twitter_online_social_media-512.png",
        alt : "logo twitter",
        link : "https://twitter.com/Audreyritzenth1"
    }
]


const FooterRendering = () => {
    return (
            logos.map(logo => 
                <Footer logoSocial={logo.logoSocial} alt={logo.alt} link={logo.link} />
            )
    )
}



export default FooterRendering;