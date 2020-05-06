module.exports = {
  siteMetadata: {
    title: `Jack Painter Portfolio`,
    description: `Jack Painter's portfolio built using gatsby (first proper project using it so be gentle :)`,
    author: `https://github.com/JackBPainter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,  //_dirname is the directoy name of the current module 
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jack-Painter-Portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        icon: `src/images/JP-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-styled-components-dark-mode`,
      options: {
        dark: require(`${__dirname}/src/styles/theme.js`).darkTheme,
        light: require(`${__dirname}/src/styles/theme.js`).lightTheme,
    },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
