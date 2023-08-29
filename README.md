# @tadashi/signature

[![NPM version][npm-img]][npm]
[![Build Status][ci-img]][ci]
[![Coverage Status][coveralls-img]][coveralls]


[npm-img]:         https://img.shields.io/npm/v/@tadashi/signature.svg
[npm]:             https://www.npmjs.com/package/@tadashi/signature
[ci-img]:          https://github.com/lagden/signature/actions/workflows/nodejs.yml/badge.svg
[ci]:              https://github.com/lagden/signature/actions/workflows/nodejs.yml
[coveralls-img]:   https://coveralls.io/repos/github/lagden/signature/badge.svg?branch=master
[coveralls]:       https://coveralls.io/github/lagden/signature?branch=master


---

Generates and verifies signatures

## Install

```
$ npm i -S @tadashi/signature
```


## Usage

### Generate

```js
import {generate} from '@tadashi/signature'

const algorithm = 'sha1'
const payload = '{}'
const secret = 'a7fee042a2e1a9fa27cfc6931949ffe1'

const signature = generate(algorithm, payload, secret)
// => sha1=61ca6afb7b2752e106c939df11bbd7ca883b8166
```

### Verify

```js
import {verify} from '@tadashi/signature'

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


## Donate ❤️

- BTC: bc1q7famhuj5f25n6qvlm3sssnymk2qpxrfwpyq7g4


## License

MIT © [Thiago Lagden](https://github.com/lagden)


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Flagden%2Fsignature.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Flagden%2Fsignature?ref=badge_large)
