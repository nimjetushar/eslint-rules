module.exports = {
    rules: {
        // general ESLint rules
        'accessor-pairs': 0,
        'array-bracket-spacing': [
            1,
            'never'
        ],

        'block-scoped-var': 0,

        'camelcase': [
            1,
            {
                'properties': 'always'
            }
        ],
        'comma-dangle': [
            'error',
            {
                'arrays': 'never',
                'exports': 'never',
                'functions': 'never',
                'imports': 'never',
                'objects': 'never'
            }
        ],
        'comma-spacing': [
            1,
            {
                'after': true,
                'before': false
            }
        ],
        'comma-style': [
            1,
            'last'
        ],
        'complexity': 0,
        'computed-property-spacing': 0,
        'consistent-return': 1,
        'consistent-this': 0,
        'constructor-super': 1,
        'curly': [
            1,
            'all'
        ],

        'default-case': 0,
        'dot-location': [
            1,
            'property'
        ],
        'dot-notation': [
            1,
            {
                'allowKeywords': true,
                'allowPattern': ''
            }
        ],

        'eol-last': 1,
        'eqeqeq': [
            'error',
            'smart'
        ],

        'func-names': 1,
        'func-style': 0,

        'generator-star-spacing': [
            1,
            'after'
        ],
        'guard-for-in': 0,

        'key-spacing': [
            1,
            {
                'afterColon': true,
                'beforeColon': false
            }
        ],

        'linebreak-style': 0,

        'max-depth': [
            0,
            3
        ],
        'max-len': [
            1,
            140,
            2
        ],
        'max-nested-callbacks': [
            0,
            3
        ],
        'max-params': 0,
        'max-statements': 0,

        'new-cap': 0,
        'new-parens': 1,
        'newline-after-var': 0,
        'no-alert': 1,
        'no-array-constructor': 1,
        'no-bitwise': 1,
        'no-caller': 1,
        'no-case-declarations': 0,
        'no-catch-shadow': 0,
        'no-cond-assign': [
            1,
            'except-parens'
        ],
        'no-confusing-arrow': ['error', { allowParens: false }],
        'no-console': 0,
        'no-constant-condition': 1,
        'no-continue': 1,
        'no-control-regex': 1,
        'no-debugger': 1,
        'no-delete-var': 1,
        'no-div-regex': 1,
        'no-dupe-args': 1,
        'no-dupe-keys': 1,
        'no-duplicate-case': 0,
        'no-else-return': 1,
        'no-empty': 1,
        'no-empty-character-class': 1,
        'no-eq-null': 0,
        'no-eval': 1,
        'no-ex-assign': 1,
        'no-extend-native': 1,
        'no-extra-bind': 1,
        'no-extra-boolean-cast': 1,
        'no-extra-parens': 0,
        'no-extra-semi': 1,
        'no-fallthrough': 0,
        'no-floating-decimal': 1,
        'no-func-assign': 1,
        'no-implied-eval': 1,
        'no-inline-comments': 0,
        'no-inner-declarations': [
            1,
            'functions'
        ],
        'no-invalid-regexp': 1,
        'no-irregular-whitespace': 1,
        'no-iterator': 1,
        'no-label-var': 1,
        'no-labels': 1,
        'no-lone-blocks': 1,
        'no-lonely-if': 1,
        'no-loop-func': 1,
        'no-mixed-spaces-and-tabs': 1,
        'no-multi-spaces': 1,
        'no-multi-str': 1,
        'no-multiple-empty-lines': [
            1,
            {
                'max': 1
            }
        ],
        'no-native-reassign': 1,
        'no-negated-in-lhs': 1,
        'no-nested-ternary': 0,
        'no-new': 1,
        'no-new-func': 1,
        'no-new-object': 1,
        'no-new-wrappers': 1,
        'no-obj-calls': 1,
        'no-octal': 1,
        'no-octal-escape': 1,
        'no-param-reassign': 0,
        'no-plusplus': 0,
        'no-process-env': 0,
        'no-proto': 1,
        'no-redeclare': 1,
        'no-regex-spaces': 1,
        'no-reserved-keys': 0,
        'no-return-assign': 1,
        'no-script-url': 1,
        'no-self-compare': 1,
        'no-sequences': 1,
        'no-shadow': 1,
        'no-shadow-restricted-names': 1,
        'no-spaced-func': 1,
        'no-sparse-arrays': 1,
        'no-ternary': 0,
        'no-this-before-super': 1,
        'no-throw-literal': 1,
        'no-trailing-spaces': 1,
        'no-undef': 1,
        'no-undef-init': 1,
        'no-underscore-dangle': 0,
        'no-unexpected-multiline': 1,
        'no-unneeded-ternary': 1,
        'no-unreachable': 1,
        'no-unused-expressions': 0,
        'no-unused-vars': [
            1,
            {
                'args': 'after-used',
                'vars': 'local'
            }
        ],
        'no-use-before-define': 1,
        'no-var': 'error',
        'no-void': 0,
        'no-warning-comments': [
            1,
            {
                'location': 'start',
                'terms': [
                    'todo',
                    'tofix'
                ]
            }
        ],
        'no-with': 1,

        'object-curly-spacing': 0,
        'object-shorthand': [
            1,
            'always'
        ],
        'operator-assignment': [
            1,
            'always'
        ],

        'padded-blocks': [
            0,
            'never'
        ],
        'prefer-const': [
            'error',
            {
                'destructuring': 'any',
                'ignoreReadBeforeAssign': false
            }
        ],

        'quote-props': [
            0,
            'as-needed'
        ],
        'quotes': [
            1,
            'single'
        ],

        'radix': [
            'error',
            'as-needed'
        ],

        'semi': [
            1,
            'always'
        ],
        'semi-spacing': [
            1,
            {
                'after': true,
                'before': false
            }
        ],
        'sort-imports': 'off',
        'sort-keys': ['error', 'asc', { caseSensitive: true, natural: true }],
        'sort-vars': 0,
        'space-after-keywords': 0,
        'space-before-blocks': [
            1,
            'always'
        ],
        'space-before-function-paren': [
            1,
            'never'
        ],
        'space-in-parens': [
            1,
            'never'
        ],
        'space-infix-ops': 1,
        'space-unary-ops': 0,
        'spaced-comment': [
            1,
            'always'
        ],
        'strict': [
            1,
            'never'
        ],

        'use-isnan': 1,

        'valid-jsdoc': 1,
        'valid-typeof': 1,
        'vars-on-top': 1,

        'wrap-iife': [
            1,
            'inside'
        ],
        'wrap-regex': 1,

        'yoda': [
            1,
            'never'
        ]
    }
};
