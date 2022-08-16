const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@prof_pics': 'src/img/profile_pictures',
  })(config);

  return config;
};
