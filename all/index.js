module.exports = {
    extends: [
        '../index.js',
        '../jest/index.js',
        '../react/index.js'
    ].map(require.resolve)
};
