const TerserPlugin = require("terser-webpack-plugin");
const merge = require("webpack-merge");

const Config = require('./defaultWebpackConfig');

module.exports = merge(Config, {
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            sourceMap: true,
            terserOptions: {
                output: {
                    comments: false,
                },
            },
            extractComments: false,
        })],
    }
});
