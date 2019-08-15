import React from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink";

// styles
import "./header.scss";

const NavLink = ({ page, pathname }) => (
    <li className="nav-item" style={{
        margin: '0 1.5em'
    }}>
        <AniLink
            className={pathname && pathname.includes(page.link) ? "nav-link active" : "nav-link"}
            to={page.link}
            cover
            duration={0.7}
            direction="left"
            bg="#FE5000"
        >
            {page.name}
        </AniLink>
    </li>
);

export default NavLink;