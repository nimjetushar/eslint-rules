module.exports = {
    env: {
        jest: true,
        'jest/globals': true // https://www.npmjs.com/package/eslint-plugin-jest#usage
    },
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
    plugin: ['jest'],
    rules: {
        // rules for https://www.npmjs.com/package/eslint-plugin-jest
        'jest/consistent-test-it': [
            'error',
            {
                fn: 'it',
                withinDescribe: 'it'
            }
        ],
        'jest/expect-expect': 'error',
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'warn',
        'jest/no-identical-title': 'error',
        'jest/no-jest-import': 'error',
        'jest/no-large-snapshots': ['warn', { maxSize: 300 }],
        'jest/prefer-strict-equal': 'warn',
        'jest/prefer-to-be-null': 'error',
        'jest/prefer-to-be-undefined': 'error',
        'jest/prefer-to-have-length': 'error',
        'jest/valid-expect': 'error'
    }
};
