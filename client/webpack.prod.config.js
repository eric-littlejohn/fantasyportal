const ProdConfig = require('./webpack.base.config');

ProdConfig.mode = 'production';
ProdConfig.devtool = false;

module.exports = ProdConfig;