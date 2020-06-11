const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const merge = require("webpack-merge");

const Config = require('./defaultWebpackConfig');

module.exports = merge(Config, {
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: './dist',
                            minimize: true
                        }
                    },
                    { loader: "css-loader" },
                    { loader: "sass-loader" }
                ],
            }
        ]
    },
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
    },
    plugins: [new MiniCssExtractPlugin()]
});
