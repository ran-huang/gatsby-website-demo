/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "后浪辩护人",
  },
  plugins: [
    "gatsby-plugin-image",
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
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ],
}
