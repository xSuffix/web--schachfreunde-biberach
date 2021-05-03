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
        baseUrl: 'http://localhost:2368',
        contentKey: '1c65488b7d16f515b7b9b6cda0',
        routes: {
          ghostPost: '/blog/:slug',
          page: '/:slug'
        }
      }
    }
  ]
}
