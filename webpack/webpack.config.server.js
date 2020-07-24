const path = require("path");
const merge = require("webpack-merge");
const nodeExternals = require('webpack-node-externals');

const Config = require('./webpack.config.common');

module.exports = merge(Config, {
    name: 'server',
    target: 'node',

    entry: './src/serverRenderer.js',
    externals: [nodeExternals()],

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'css-loader',
                    'sass-loader',
                ],
            }
        ]
    },

    output: {
        filename: "public/serverRenderer.js",
        publicPath: "public/",
        libraryTarget: 'commonjs2',
    },
});
