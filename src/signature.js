import {createHmac, timingSafeEqual} from 'node:crypto'

export function generate(algorithm, payload, secret) {
	return `${algorithm}=${createHmac(algorithm, secret).update(payload).digest('hex')}`
}

export function verify(signature, payload, secret) {
	const parts = String(signature).split('=')
	if (parts.length !== 2) {
		return false
	}

	const [algorithm] = parts
	const verify = generate(algorithm, payload, secret)
	return timingSafeEqual(Buffer.from(verify), Buffer.from(signature))
}
