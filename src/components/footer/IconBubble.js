import React from 'react';
import { SocialIcon } from 'react-social-icons';

const IconBubble = ({link, internalLink, network}) => (
    // <a href={link} target={internalLink ? "_self" : "_blank"}>
        <SocialIcon network={network} fgColor="#fff" bgColor="#fe5000" url={link} />
    // </a>
);

export default IconBubble;
