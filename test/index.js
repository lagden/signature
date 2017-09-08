'use strict'

import test from 'ava'
import {verify, generate} from '../.'

const _secret = 'a7fee042a2e1a9fa27cfc6931949ffe1'

test('signature', t => {
	const signature = generate('sha256', JSON.stringify({}), _secret)
	t.is(signature, 'sha256=46ed485fde095a22b04085bae2b109fffa3e7ce293c8bacacd5bfcebe938a212')
})

test('valid', t => {
	const signature = generate('sha1', JSON.stringify({}), _secret)
	t.true(verify(signature, '{}', _secret))
})

test('invalid payload', t => {
	const signature = generate('sha1', JSON.stringify({invalid: 'invalid'}), _secret)
	t.false(verify(signature, '{}', _secret))
})

test('invalid secret', t => {
	const signature = generate('sha1', JSON.stringify({}), _secret)
	t.false(verify(signature, '{}', 'abc'))
})

test('missing algorithm', t => {
	const signature = '61ca6afb7b2752e106c939df11bbd7ca883b8166'
	t.false(verify(signature, '{}', _secret))
})
