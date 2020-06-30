const path = require("path");
const merge = require("webpack-merge");

const Config = require('./defaultWebpackConfig');

module.exports = merge(Config, {
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
    watch: true,
    devtool: "source-map",
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 9000,
        publicPath: "http://localhost:9000/dist/",
        historyApiFallback: true,
    }
});
