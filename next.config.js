const withNextra = require('nextra')({
  //Nextra
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  projectLink: 'https://gitlab.com/librewolf-community/browser',
  titleSuffix: ' Next boiler plate CDC',

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
