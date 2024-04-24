const path = require("path");

module.exports = {
    entry: "./index.js",
    mode: process.env.NODE_ENV ?? "production",
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: "raw-loader",
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {},
            },
        ],
    },
};
