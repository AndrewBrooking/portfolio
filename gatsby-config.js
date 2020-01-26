module.exports = {
  siteMetadata: {
    title: 'Andrew Brooking - Portfolio',
    author: 'Andrew Brooking',
    description: 'Personal web portfolio using GatsbyJS.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'andrew-brooking-gatsby-portfolio',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/portfolio-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
