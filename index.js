'use strict'

const {createHmac} = require('crypto')

function generate(algorithm, payload, secret) {
	return `${algorithm}=${createHmac(algorithm, secret).update(payload).digest('hex')}`
}

function verify(signature, payload, secret) {
	const parts = `${signature}`.split('=')
	if (parts.length !== 2) {
		return false
	}
	const [algorithm] = parts
	const verify = generate(algorithm, payload, secret)
	return verify === signature
}

exports.verify = verify
exports.generate = generate
