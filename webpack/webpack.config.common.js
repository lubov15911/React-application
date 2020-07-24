const path = require("path");
const StylelintPlugin = require("stylelint-webpack-plugin");

module.exports = {
    mode: process.env.NODE_ENV,

    output: {
        path: path.resolve(__dirname, "public/"),
        publicPath: "/public/",
        filename: "bundle.js"
    },

    resolve: {
        extensions: ["*", ".js", ".jsx"],
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: ["babel-loader", "eslint-loader"]
            }
        ]
    },

    plugins: [new StylelintPlugin()]
};
