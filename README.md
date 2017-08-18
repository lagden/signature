# signature-verify

[![XO code style][xo-img]][xo]


[xo-img]:        https://img.shields.io/badge/code_style-XO-5ed9c7.svg
[xo]:            https://github.com/sindresorhus/xo

Verified the passed-in signature

## Install

```
$ npm i -S @tadashi/signature-verify
```


## Usage

```js
const signatureVerify = require('@tadashi/signature-verify')

const signature = 'sha1=61ca6afb7b2752e106c939df11bbd7ca883b8166'
const payload = '{}'
const secret = 'a7fee042a2e1a9fa27cfc6931949ffe1'

const isValid = signatureVerify(signature, payload, secret) // => true
```


## API

#### signatureVerify(signature, payload, secret)

parameter   | type                 | required    | description
----------- | -------------------- | ----------- | ------------
signature   | string               | yes         | Algorithm used to generate the hash + hash e.g. `sha1=61c...675`
payload     | string               | yes         | Data used to generate the hash
secret      | string               | yes         | To validate a signature


## License

MIT © [Thiago Lagden](http://lagden.in)
