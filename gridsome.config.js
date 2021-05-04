// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  // siteName: 'Schachfreunde Heilbronn-Biberach',
  templates: {
    GhostPost: '/blog/:slug'
  },
  plugins: [
    {
      use: '@gridsome/source-ghost',
      options: {
        baseUrl: 'https://ghost-router-zj6i02up85d7c7hu-gtw.qovery.io',
        contentKey: '9e1c8d6f6404418cf9c96e4cbc',
        routes: {
          ghostPost: '/blog/:slug',
          page: '/:slug'
        }
      }
    }
  ]
}
