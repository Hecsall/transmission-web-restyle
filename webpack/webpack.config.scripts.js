
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const utils = require('./utils');


module.exports = (mode) => {
    const entry = utils.compose('js');

    // Se non sono presenti entries non fare nulla
    if (!Object.entries(entry).length) {
        return null;
    }

    return {
        name: 'JavaScript',
        entry,
        mode,
        devtool: mode === 'development' ? 'source-map' : false,
        output: {
            filename: '[name].min.js',
            path: path.resolve('./static/dist/js'),
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    use: [{
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: ['@babel/plugin-proposal-object-rest-spread'],
                            cacheDirectory: true,
                            // minified: true, // serve?
                        },
                    }],
                },
                {
                    enforce: 'pre',
                    test: /\.jsx?$/,
                    exclude: /vendor/,
                    use: [{
                        loader: 'eslint-loader',
                        options: {
                            emitWarning: true,
                        },
                    }],
                },
            ],
        },
        plugins: [
            new CleanWebpackPlugin(),
        ],
        performance: {
            maxEntrypointSize: 300000,
            maxAssetSize: 300000,
        },
    };
};
