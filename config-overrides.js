const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@img': 'src/img',
  })(config);

  return config;
};
