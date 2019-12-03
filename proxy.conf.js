var PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'https://swapi.co',
    secure: false,
    changeOrigin: true,
  },
];

module.exports = PROXY_CONFIG;
