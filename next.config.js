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
        basePath: false,
        permanent: false,
      },
    ];
  },
});
const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  cacheOnFrontEndNav: true,
  /*   aggresiveFrontEndNavCaching: true, */
  reloadOnOnline: true,
  swcMinify: true,
  disable: false,
  workboxOptions: {
    disableDevLogs: true,
  },
  pwa: {
    dest: 'public',
    subdomainPrefix: '/login',
    scope: '/',
  },
});
module.exports = withPWA(
  withNextra({
    compiler: {
      styledComponents: {
        displayName: true,
        ssr: true,
        fileName: false,
      },
    },
  })
);
