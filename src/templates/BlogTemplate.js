import React from 'react'
import { graphql } from 'gatsby';

const BlogTemplate = ({ data }) => {
    return (
        <div>
            <h3>{data.markdownRemark.frontmatter.title}</h3>
        </div>
    );
};

export default BlogTemplate;

export const blogQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            id
            html
            frontmatter {
                title
                date(formatString: "DD MMM YYYY")
            }
        }
    }
`;