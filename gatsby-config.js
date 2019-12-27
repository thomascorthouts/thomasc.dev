module.exports = {
  siteMetadata: {
    title: `Thomas Corthouts`,
    description: `Thomas Corthouts' personal website.`,
    author: `@thomascorthouts`,
    siteUrl: 'https://www.thomasc.dev',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
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
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images\/icons/,
        },
      },
    },
  ],
}
