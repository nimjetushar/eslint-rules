# eslint-rules

[![Build Status](https://semaphoreci.com/api/v1/nimjetushar/eslint-rules/branches/master/shields_badge.svg)](https://semaphoreci.com/nimjetushar/eslint-rules)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=nimjetushar/eslint-rules)](https://dependabot.com)
<br>
![npm](https://img.shields.io/npm/v/@fourjs/eslint-config-tn)
[![GitHub license](https://img.shields.io/github/license/nimjetushar/eslint-rules)](https://github.com/nimjetushar/eslint-rules/blob/master/LICENSE)

Standard eslint rules

## Installation

``` npm i @fourjs/eslint-config-tn -D ```

## Setup

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
```

Provides different type of linting's which can be extented
```
@fourjs/eslint-config-tn -> This provides lint rules for your Javascript code

@fourjs/eslint-config-tn/jest -> This provides lint rule for jest unit tests

@fourjs/eslint-config-tn/react -> This provides lint rule for React code

@fourjs/eslint-config-tn/all -> This combines all rules for Javascript, Jest and React
```
