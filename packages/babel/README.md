# @theforeman/babel

> Adds theforeman babel configuration to your project

[![Package Version](https://img.shields.io/npm/v/@theforeman/babel.svg?style=flat-square)](https://www.npmjs.com/package/@theforeman/babel)
[![Downloads Status](https://img.shields.io/npm/dm/@theforeman/babel.svg?style=flat-square)](https://npm-stat.com/charts.html?package=@theforeman/babel&from=2016-04-01)
[![Build Status: Linux](https://img.shields.io/travis/theforeman/foreman-js/master.svg?style=flat-square)](https://travis-ci.org/theforeman/foreman-js)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Installation

1. Install `@theforeman/babel` dependency

```sh
npm install --save-dev @theforeman/babel
```

2. Create a `.babelrc` file and use `@theforeman/babel` as a preset.

```
{
  "presets": ["@theforeman/babel"]
}
```

3. If you are using webpack, add `@theforeman/babel`
   to the `babel-loader` in your webpack config.

```js
const module = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['@theforeman/babel'],
      }
    },
  ],
};
```

## Contributing

Please checkout the [`contributing.md`](../../contributing.md), the [`roadmap.md`](../../roadmap.md) and the open issues.