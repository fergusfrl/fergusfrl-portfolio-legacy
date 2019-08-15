const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    const projectPost = path.resolve(`src/templates/ProjectTemplate.js`);
    const blogPost = path.resolve(`src/templates/BlogTemplate.js`);

    return graphql(`
        query loadPagesQuery($limit: Int!) {
            allMarkdownRemark(limit: $limit) {
                edges {
                    node {
                        frontmatter {
                            path
                        }
                    }
                }
            }
        }
    `, { limit: 1000 }).then(res => {
        if(res.errors) {
            throw res.errors;
        }

        res.data.allMarkdownRemark.edges.forEach(edge => {
            const path = edge.node.frontmatter.path;
            createPage({
                path,
                component: path.includes('/projects/') ? projectPost : blogPost
            });
        });
    });
};
