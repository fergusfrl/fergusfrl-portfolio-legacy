import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

// Components
import BlogCard from '../components/blog-card/BlogCard';
import Quotation from "../components/quotation/Quotation";

const Blog = ({ location, data }) => (
  <Layout pathname={location.pathname}>
    <SEO title="Blog" />
    <Quotation
      quote="Either write something worth <span>reading</span> or do something worth <span>writing</span>."
      author="Benjamin Franklin"
      authorTitle="politition"
    />
    <div className="blog-content">
      { data.allMarkdownRemark.nodes.map(node => (
        <BlogCard
          title={node.frontmatter.title}
          blurb={node.frontmatter.blurb}
          img={node.frontmatter.featuredImage.childImageSharp.fluid}
          date={node.frontmatter.date}
          link={node.frontmatter.path}
        />
      )) }
    </div>
  </Layout>
);

export default Blog;

export const blogListQuery = graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { path: { regex: "/blogs/" } } },
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