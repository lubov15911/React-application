const path = require("path");
const webpack = require('webpack');
const merge = require("webpack-merge");

const Config = require('./webpack.config.common');

module.exports = merge(Config, {
    name: 'client',
    target: 'web',

    entry: ["babel-polyfill", "./src/index.js"],

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
});
