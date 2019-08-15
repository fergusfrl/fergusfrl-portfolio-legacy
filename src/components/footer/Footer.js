import React from 'react';
import './footer.scss';

// Components
import IconBubble from './IconBubble';

const socialMedia = [
    { network: "facebook", link: "https://www.facebook.com/fergus.farrell.12", internalLink: false },
    { network: "github", link: "https://github.com/fergusfrl", internalLink: false },
    { network: "linkedin", link: "https://www.linkedin.com/in/fergusfrl", internalLink: false },
    { network: "email", link: "/contact", internalLink: true }
];

const Footer = () => (
    <footer>
        <p>Come and find me on the Web!</p>
        <div className="sm-bubbles">
            {
                socialMedia.map((sm, index) => <IconBubble
                    key={index}
                    link={sm.link}
                    internalLink={sm.internalLink}
                    network={sm.network}
                />)
            }
        </div>
        <p>© fergusfrl | {new Date().getFullYear()}</p>
    </footer>
);

export default Footer;
