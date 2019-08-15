import React, { useState } from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Img from 'gatsby-image';

// styles
import './project-tile.scss';

const inactiveState = (fluid, title) => (
    <div className="img-container">
        <Img className="image" fluid={fluid} />
        <div className="card-img-overlay">
            <h5 className="card-title">{title}</h5>
        </div>
    </div>
);

const activeState = (title, blurb) => (
    <div className="hovered">
        <div className="card-img-overlay">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{blurb}</p>
            <p className="card-text more-information">More Information</p>
        </div>
    </div>
);

const ProjectTile = ({ title, path, blurb, img }) => {
    const [hovered, setHovered] = useState(false);
    return (
        <div
            className="col-md-4 col-sm-6 col-xs-12 text"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <AniLink to={path} cover duration={0.7} direction="left" bg="#FE5000" >
                { hovered ? activeState(title, blurb) : inactiveState(img.fluid, title) }
            </AniLink>
        </div>
    );
}

export default ProjectTile;