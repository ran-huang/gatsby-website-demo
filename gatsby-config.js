/**
 * @type {import('gatsby').GatsbyConfig}
 */

const path = require('path');

module.exports = {
  siteMetadata: {
    title: "后浪辩护人",
  },
  plugins: [
    "gatsby-plugin-image",
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          quality: 100,
        }
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `publications`,
        path: `${__dirname}/content/publications`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `cases`,
        path: `${__dirname}/content/cases`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `practices`,
        path: `${__dirname}/content/practices`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-styled-components"
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": path.resolve(__dirname, 'src'),
          "@components": path.resolve(__dirname, 'src/components'),
          "@pages": path.resolve(__dirname, 'src/pages'),
          "@images": path.resolve(__dirname, 'src/images'),
          "@data": path.resolve(__dirname, 'src/data'),
          "@styles": path.resolve(__dirname, 'src/styles'),
          "@utils": path.resolve(__dirname, 'src/utils'),
        },
        extensions: []
      }
    }
  ],
}
