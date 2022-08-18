const DevConfig = require('./webpack.base.config');

DevConfig.mode = 'development';
DevConfig.devtool = 'inline-source-map';
DevConfig.devServer = {
  static: {
    directory:__dirname + '/public/',
  },
  compress: true,
  port: 9000,
};

module.exports = DevConfig;