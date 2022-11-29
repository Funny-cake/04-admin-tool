import { SHA3 } from 'sha3';

export function getHash(text) {
	return new SHA3(256).update(text).digest('hex');
}

export function getSlatedHash(text, salt) {
	return getHash(`${text}_${salt}`);
}