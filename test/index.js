'use strict'

import {createHmac} from 'crypto'
import test from 'ava'
import signatureVerify from '../.'

function signatureGen(algorithm, payload, secret) {
	return `${algorithm}=${createHmac(algorithm, secret).update(payload).digest('hex')}`
}

test('valid', t => {
	const _secret = 'a7fee042a2e1a9fa27cfc6931949ffe1'
	const signature = signatureGen('sha1', JSON.stringify({}), _secret)
	t.true(signatureVerify(signature, '{}', _secret))
})

test('invalid payload', t => {
	const _secret = 'a7fee042a2e1a9fa27cfc6931949ffe1'
	const signature = signatureGen('sha1', JSON.stringify({invalid: 'invalid'}), _secret)
	t.false(signatureVerify(signature, '{}', _secret))
})

test('invalid secret', t => {
	const _secret = 'a7fee042a2e1a9fa27cfc6931949ffe1'
	const signature = signatureGen('sha1', JSON.stringify({}), _secret)
	t.false(signatureVerify(signature, '{}', 'abc'))
})

test('missing algorithm', t => {
	const _secret = 'a7fee042a2e1a9fa27cfc6931949ffe1'
	const signature = '61ca6afb7b2752e106c939df11bbd7ca883b8166'
	t.false(signatureVerify(signature, '{}', _secret))
})
