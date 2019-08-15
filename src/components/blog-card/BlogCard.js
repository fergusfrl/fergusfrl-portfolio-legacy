import React from 'react';
import Img from 'gatsby-image';
import AniLink from "gatsby-plugin-transition-link/AniLink";

// styles
import './blog-card.scss';

const BlogCard = ({ title, blurb, img, date, link }) => {
    return (
        <div className="card mb-3 blog-card">
            <AniLink
                className="ani-link"
                to={link}
                cover
                duration={0.7}
                direction="left"
                bg="#FE5000"
            >
            <div className="row no-gutters shadow">
                <div className="col-sm-8 col-xs-12">
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p className="card-text">{blurb}</p>
                        <p className="card-text">{date}</p>
                    </div>
                </div>
                <div className="col-sm-4 col-xs-12image">
                    <Img fluid={img} />
                </div>
            </div>
            </AniLink>
        </div>
    );
}

export default BlogCard;