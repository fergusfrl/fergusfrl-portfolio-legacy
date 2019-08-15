import PropTypes from "prop-types"
import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";

// component
import NavLink from './NavLink';

// styles
import './header.scss'

const PAGES = [
  { name: "Projects.", link: "/projects/" },
  { name: "About.", link: "/about/" },
  { name: "Skills.", link: "/skills/" },
  // { name: "Blog.", link: "/blog/" }, // Once I'm happy with the blog I will enable this tab again :)
  { name: "Contact.", link: "/contact/" },
];

const Header = ({ siteTitle, pathname }) => {
  return (
    <div className="container">
      <nav className="navbar navbar-light navbar-expand-sm position-static">
        <AniLink
          to="/"
          className="navbar-brand"
          cover
          duration={0.7}
          direction="right"
          bg="#FE5000"
        >
          FergusFrl
        </AniLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            {PAGES.map((page, index) => (
              <NavLink
                key={index}
                page={page}
                pathname={pathname}
              />
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
