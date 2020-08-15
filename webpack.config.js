const { argv } = require('yargs');

const mode = argv.mode || 'development';

const configs = {
    // js: require('./webpack/webpack.config.scripts'),
    css: require('./webpack/webpack.config.scss'),
    img: require('./webpack/webpack.config.images'),
};

module.exports = Object.keys(configs)
    .map((key) => {
        if (typeof configs[key] !== 'function') {
            return null;
        }
        return configs[key](mode);
    })
    .filter((config) => config !== null);
