const withNextra = require('nextra')({
  //Nextra
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',

  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true,
      },
    ];
  },
});

module.exports = withNextra({});
