const path = require('path');
const withCustomBabelConfigFile = require('next-plugin-custom-babel-config');
const withTranspileModules = require('next-plugin-transpile-modules');

module.exports = withCustomBabelConfigFile(
  withTranspileModules({
    transpileModules: ['common/common-const'],
    babelConfigFile: path.resolve('../../babel.config.js'),
  }),
);
