import React from "react";
import { graphql } from 'gatsby';
import Layout from "../components/layout";
import SEO from "../components/seo";

// Components
import ProjectTile from '../components/project-tile/ProjectTile';
import Quotation from "../components/quotation/Quotation";

const Projects = ({ location, data }) => (
  <Layout pathname={location.pathname}>
    <SEO title="Projects" />
    <Quotation
      quote="Every project is an <span>opportunity</span> to learn, to figure out problems and challenges, to invent and reinvent"
      author="David Rockwell"
      authorTitle="architect & author"
    />
    <div className="project-grid">
      <div className="row">
        {
          data.allMarkdownRemark.nodes.map(node => {
            const { frontmatter } = node;
            return (
              <ProjectTile
                title={frontmatter.title}
                path={frontmatter.path}
                blurb={frontmatter.blurb}
                img={frontmatter.featuredImage.childImageSharp}
              />
            );
          })
        }
      </div>
    </div>
  </Layout>
)

export default Projects;

export const projectListQuery = graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { path: { regex: "/projects/" } } },
        limit: 8,
        sort: {
          fields: frontmatter___date,
          order: DESC
        }
      ) {
        nodes {
          frontmatter {
            title
            date
            path
            blurb
            tags
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
`;
