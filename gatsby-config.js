module.exports = {
  siteMetadata: {
    title: `Thomas Corthouts`,
    description: `Thomas Corthouts' personal website.`,
    author: `@thomascorthouts`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `thomasc.dev`,
        short_name: `thomasc.dev`,
        start_url: `/`,
        background_color: `#3260ab`,
        theme_color: `#3260ab`,
        display: `minimal-ui`,
        icon: `src/images/bitmoji-square.jpeg`, // This path is relative to the root of the site.
      },
    },
  ],
}
