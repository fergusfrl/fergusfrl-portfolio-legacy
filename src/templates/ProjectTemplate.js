import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import AniLink from "gatsby-plugin-transition-link/AniLink";

// Components
import Layout from '../components/layout';

// styles
import './project-template.scss';

const ProjectTemplate = ({ data, location }) => {
    const { title, blurb, author, date, tags, featuredImage } = data.markdownRemark.frontmatter;
    return (
        <Layout pathname={location.pathname}>
            <div className="card project-card">
                <Img className="image" fluid={featuredImage.childImageSharp.fluid} style={{ height: '500px' }} />
                <div className="card-body">
                    <h2 className="card-title">
                        <span className="title">{title}</span>: {blurb.toLowerCase()}
                    </h2>
                    <p>{author} - {date}</p>
                    {tags.map(tag => (
                        <span class="badge badge-pill badge-tag">{tag}</span>
                    ))}
                    <hr />
                    <div
                        className="project-content container"
                        dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}
                    />
                </div>
                <AniLink
                    to="/projects/"
                    cover
                    duration={0.7}
                    direction="right"
                    bg="#FE5000"
                >
                    back to projects
                </AniLink>
            </div>
        </Layout>
    );
};

export default ProjectTemplate;

export const projectQuery = graphql`
    query ProjectPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            id
            html
            frontmatter {
                title
                blurb
                author
                tags
                date(formatString: "DD MMM YYYY")
                featuredImage {
                    childImageSharp {
                      fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
            }
        }
    }
`;