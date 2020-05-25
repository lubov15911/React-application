const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = env => {
    let config = {
        entry: "./src/index.js",
        mode: env,
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules)/,
                    loader: "babel-loader",
                    options: { presets: ["@babel/env"] }
                },
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"]
                }
            ]
        },
        resolve: { extensions: ["*", ".js", ".jsx"] },
        output: {
            path: path.resolve(__dirname, "dist/"),
            publicPath: "/dist/",
            filename: "bundle.js"
        }
    };

    if (env.production) {
        config.mode = 'production';
        config.optimization = {
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
        };
    } else {
        config.mode = 'development';
        config.watch = true;
        config.devtool = "source-map";
        config.devServer = {
            contentBase: path.join(__dirname, "public/"),
            port: 9000,
            publicPath: "http://localhost:9000/dist/"
        };
    }

    return config;
};
