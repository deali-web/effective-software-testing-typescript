const leftPadUtils = () => {
	const SPACE = ' ';
	const isEmpty = (str: string) => !str.length;
	const leftPad = (str: string, size: number, padStr: string) => {
		if (isEmpty(padStr)) padStr = SPACE;
		const padLen = padStr.length;
		const strLen = str.length;
		const pads = size - strLen;
		if (pads <= 0) return str;
		if (pads === padLen) return `${padStr}${str}`;
		if (pads < padLen) return `${padStr.substring(0, pads)}${str}`;
		const padding = Array(pads).fill('');
		const padChars = padStr.split('');
		for (let i = 0; i < pads; i++) {
			padding[i] = padChars[i % padLen];
		}
		return `${padding.join('')}${str}`;
	};
	return {
		leftPad,
	};
};

export default leftPadUtils;
