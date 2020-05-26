module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
        'jest/globals': true, // https://www.npmjs.com/package/eslint-plugin-jest#usage
        node: true,
        'shared-node-browser': true
    },
    extends: [
        './node_modules/eslint/conf/eslint-recommended.js',
        './rules/core.js'
    ].map(require.resolve),
    overrides: [
        {
            files: ['./src/**/*.test.js', './src/**/*.spec.js'],
            rules: {
                'global-require': 0,
                'no-console': 0
            }
        }
    ],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            defaultParams: true,
            jsx: true,
            spread: true
        },
        ecmaVersion: 6,
        sourceType: 'module'
    },
    plugins: ['jest', 'babel', 'import'],
    rules: {}
};
