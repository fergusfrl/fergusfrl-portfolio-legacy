module.exports = {
  siteMetadata: {
    title: `Fergus Farrell`,
    description: `Portfolio website for Fergus Farrell. Read blogs, view projects and learn about my work experience`,
    author: `@fergusfrl`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/posts/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/src/posts/blogs`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `FergusFrl`,
        short_name: `FergusFrl`,
        start_url: `/`,
        background_color: `#fe5000`,
        theme_color: `#fe5000`,
        display: `minimal-ui`,
        icon: `src/images/man_frame_orange.svg`, // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ['Work Sans', 'Montserrat']
        }
      }
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: `${__dirname}/src/images`
        }
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
