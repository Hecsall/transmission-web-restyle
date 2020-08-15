
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const utils = require('./utils');


module.exports = (mode) => {
    const entry = utils.compose('scss');

    // Se non sono presenti entries non fare nulla
    if (!Object.entries(entry).length) {
        return null;
    }

    return {
        name: 'SCSS',
        entry,
        mode,
        devtool: mode === 'development' ? 'source-map' : false,
        output: {
            path: path.resolve('./static/dist/css'),
        },
        module: {
            rules: [{
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('autoprefixer')(),
                            ],
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                indentWidth: 4,
                                includePaths: [
                                    path.resolve('node_modules'),
                                ],
                                sourceMap: true,
                            },
                        },
                    },
                ],
            }],
        },
        plugins: [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: '[name].min.css',
                chunkFilename: '[id].min.css',
            }),
            new FileManagerPlugin({
                onEnd: {
                    delete: [
                        path.resolve('./static/dist/css/**/*.js*'),
                    ],
                },
            }),
            new StylelintPlugin({
                fix: true,
            }),
        ],
        performance: {
            maxEntrypointSize: 600000,
            maxAssetSize: 600000,
        },
    };
};
