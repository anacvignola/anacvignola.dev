require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `anacvignola.dev`,
    description: `Full stack developer`,
    author: `Ana Claudia Vignola`,
    siteUrl: `https://anacvignola.dev/`,
    socialLinks: {
      github: 'https://github.com/anacvignola',
      linkedin: 'https://www.linkedin.com/in/anacvignola/',
    },
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
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
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        url: 'https://api.github.com/graphql',
        headers: {
          Authorization: `bearer ${GATSBY_PORTFOLIO_GITHUB_TOKEN}`,
        },
        fetchOptions: {},
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `anacvignola.dev`,
        short_name: `anacvignola.dev`,
        start_url: `/`,
        background_color: `#44475a`,
        theme_color: `#44475a`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
  ],
};
