import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from "../components/layout"
import SEO from "../components/seo"

import Pic from '../images/man_frame.svg';

// styles
import './pages.scss';

const IndexPage = ({ location }) => (
  <Layout pathname={location.pathname}>
    <SEO title="Home" />
    <div className="row">
      <div className="col-md-8 col-xs-12">
        <h1>Hello, I'm <span>Fergus</span></h1>
      </div>
      <div className="col-md-4 col-xs-12">
        {/* TODO: animate SVG */}
        <Pic className="svg" />
      </div>
    </div>
    <div className="row">
      <div className="col-md-8 col-xs-12">
        <p className="sub-heading">I'm a software <span>developer</span> and <span>designer</span>.</p>
      </div>
      <div className="col-md-4 col-xs-12">
        <AniLink
          to='/projects'
          cover
          duration={0.7}
          direction="left"
          bg="#FE5000"
        >
          <button type="button" className="btn btn-lg btn-primary primary-button">
            CHECK OUT MY WORK <span role="img" aria-label="point-right">👉</span>
          </button>
        </AniLink>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
