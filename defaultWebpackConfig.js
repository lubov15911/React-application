const path = require("path");
const StylelintPlugin = require("stylelint-webpack-plugin");

module.exports = {
    entry: ["babel-polyfill", "./src/index.js"],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: ["babel-loader", "eslint-loader"]
            }
        ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "bundle.js"
    },
    plugins: [new StylelintPlugin()]
};
