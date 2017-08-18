'use strict'

const {createHmac} = require('crypto')

function signatureVerify(signature, payload, secret) {
	const parts = `${signature}`.split('=')
	if (parts.length !== 2) {
		return false
	}
	const algorithm = parts[0]
	const verify = `${algorithm}=${createHmac(algorithm, secret).update(payload).digest('hex')}`
	return verify === signature
}

module.exports = signatureVerify
