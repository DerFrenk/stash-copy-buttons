module.exports = {
    artifactsDir: "artifacts",
    ignoreFiles: [
        ".git/",
        ".idea/",
        "artifacts/",
        "lib/",
        "node_modules/",
        "types/",
        ".gitignore",
        "index.js",
        "LICENSE",
        "package.json",
        "package-lock.json",
        "README.md",
        "web-ext-config.js",
        "webpack.config.js",
    ],
    build: {
        overwriteDest: true,
    },
    sign: {
        channel: "unlisted",
    },
};
