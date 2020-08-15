const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const utils = require('./utils');


module.exports = (mode) => {
    const entry = utils.compose('img');

    if (!Object.entries(entry).length) {
        return null;
    }

    return {
        name: 'Images',
        mode,
        entry,
        stats: utils.stats(),
        output: {
            path: path.resolve('./static/dist/img'),
        },
        module: {
            rules: [{
                test: /\.(gif|png|jpe?g|webp|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            esModule: false,
                        },
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                quality: 80,
                            },
                            optipng: {
                                optimizationLevel: 7,
                            },
                            gifsicle: {
                                optimizationLevel: 3,
                            },
                            webp: {
                                quality: 80,
                                method: 6,
                            },
                        },
                    },
                ],
            }],
        },
        plugins: [
            new CleanWebpackPlugin(),
            new FileManagerPlugin({
                onEnd: {
                    delete: [
                        path.resolve('./static/dist/img/**/*.js*'),
                    ],
                },
            }),
        ],
    };
};
