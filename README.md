# eslint-rules

[![GitHub license](https://img.shields.io/github/license/nimjetushar/eslint-rules)](https://github.com/nimjetushar/eslint-rules/blob/master/LICENSE)

Standard eslint rules

## Installation

``` npm i @fourjs/eslint-config-tn -D ```

Install peer denpendencies as required
``` npm install eslint-plugin-import eslint-plugin-jest eslint-plugin-react -D ```

Extend @fourjs/eslint-config-tn to apply rules.

```
{
  "extends": [
    "@fourjs/eslint-config-tn"
  ],
  "parser": "babel-eslint"
}
```

Override rules by adding rules as mentioned below 
```
{
  "extends": [
    "@fourjs/eslint-config-tn"
  ],
  "parser": "babel-eslint",
  "rules": {
    ...
  }
}
