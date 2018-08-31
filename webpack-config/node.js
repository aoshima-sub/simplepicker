const config = require('./base-config');

config.entry = {
  'simplepicker': './lib/index.js'
};

config.target = 'node';
config.output.library = 'SimplePicker';
config.output.libraryTarget = 'commonjs2';

module.exports = config;