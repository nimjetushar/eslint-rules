module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
        'shared-node-browser': true
    },
    extends: [
        'plugin:react/recommended'
    ],
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
    plugins: ['react'],
    rules: {},
    settings: {
        react: {
            // Regex for Component Factory to use,
            // default to "createReactClass"
            createClass: 'createReactClass',
            // Flow version
            flowVersion: '0.53',
            // Pragma to use, default to "React"
            pragma: 'React',
            // React version. "detect" automatically picks the version you have installed.
            // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
            // default to latest and warns if missing
            // It will default to "detect" in the future
            version: 'detect'
        }
    }
};
