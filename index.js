const context = require.context('./types', false, /\.js$/);

context.keys().forEach(key => {
    context(key);
});