module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
        'shared-node-browser': true
    },
    extends: [
        'eslint/conf/eslint-recommended.js',
        './rules/core.js',
        './rules/babel.js',
        './rules/import.js'
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
    plugins: ['babel', 'import'],
    rules: {}
};
