# signature

[![NPM version][npm-img]][npm]
[![Build Status][ci-img]][ci]
[![Coverage Status][coveralls-img]][coveralls]
[![Dependency Status][dep-img]][dep]
[![devDependency Status][devDep-img]][devDep]

[![XO code style][xo-img]][xo]
[![Greenkeeper badge][greenkeeper-img]][greenkeeper]


[greenkeeper-img]: https://badges.greenkeeper.io/lagden/signature.svg
[greenkeeper]:     https://greenkeeper.io/
[npm-img]:         https://img.shields.io/npm/v/@tadashi/signature.svg
[npm]:             https://www.npmjs.com/package/@tadashi/signature
[ci-img]:          https://travis-ci.org/lagden/signature.svg
[ci]:              https://travis-ci.org/lagden/signature
[coveralls-img]:   https://coveralls.io/repos/github/lagden/signature/badge.svg?branch=master
[coveralls]:       https://coveralls.io/github/lagden/signature?branch=master
[dep-img]:         https://david-dm.org/lagden/signature.svg
[dep]:             https://david-dm.org/lagden/signature
[devDep-img]:      https://david-dm.org/lagden/signature/dev-status.svg
[devDep]:          https://david-dm.org/lagden/signature#info=devDependencies
[xo-img]:          https://img.shields.io/badge/code_style-XO-5ed9c7.svg
[xo]:              https://github.com/sindresorhus/xo

Generates and verifies signatures

## Install

```
$ npm i -S @tadashi/signature
```


## Usage

### Generate

```js
const {generate} = require('@tadashi/signature')

const algorithm = 'sha1'
const payload = '{}'
const secret = 'a7fee042a2e1a9fa27cfc6931949ffe1'

const signature = generate(algorithm, payload, secret)
// => sha1=61ca6afb7b2752e106c939df11bbd7ca883b8166
```

### Verify

```js
const {verify} = require('@tadashi/signature')

const signature = 'sha1=61ca6afb7b2752e106c939df11bbd7ca883b8166'
const payload = '{}'
const secret = 'a7fee042a2e1a9fa27cfc6931949ffe1'

const isValid = verify(signature, payload, secret)
// => true
```


## API

### generate(algorithm, payload, secret)

parameter   | type                 | required    | description
----------- | -------------------- | ----------- | ------------
signature   | string               | yes         | Algorithm that will be used
payload     | string               | yes         | Data to generate
secret      | string               | yes         | Some expression

### verify(signature, payload, secret)

parameter   | type                 | required    | description
----------- | -------------------- | ----------- | ------------
signature   | string               | yes         | Algorithm used + hash e.g. `sha1=61c...675`
payload     | string               | yes         | Data used to generate the hash
secret      | string               | yes         | The same expression used to generate


## License

MIT © [Thiago Lagden](http://lagden.in)
