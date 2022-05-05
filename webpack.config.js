const path = require("path");

module.exports = {
    entry: "./index.js",
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
                options: {
                    presets: [["es2015", { modules: false }]],
                },
            },
        ],
    },
};
