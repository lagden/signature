'use strict'

const {createHmac, timingSafeEqual} = require('crypto')

function _timingSafeEqual(a, b) {
	try {
		return timingSafeEqual(a, b)
	} catch {
		return false
	}
}

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
	return _timingSafeEqual(Buffer.from(verify), Buffer.from(signature))
}

exports.verify = verify
exports.generate = generate
