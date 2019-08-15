/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
import 'bootstrap/dist/css/bootstrap.css';

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

// Components
import Header from "./header/Header";
import Footer from "./footer/Footer";

// styles
import './layout.scss'

const Layout = ({ children, pathname }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}

    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} pathname={pathname} />
        <div className="container">
          <main className="content">{children}</main>
        </div>
        { pathname !== "/" && <Footer /> }
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
