class IllegalArgumentError extends Error {
	constructor() {
		super('Digits must be between 0 and 9');
	}
}

export class NumberUtils {
	public add(left: number[], right: number[]) {
		left.reverse();
		right.reverse();

		const result: number[] = [];
		let carry = 0;
		for (let i = 0; i < Math.max(left.length, right.length); i++) {
			const leftDigit = left.length > i ? left[i] : 0;
			const rightDigit = right.length > i ? right[i] : 0;

			if (leftDigit < 0 || leftDigit > 9 || rightDigit < 0 || rightDigit > 9) {
				throw new IllegalArgumentError();
			}

			const sum = leftDigit + rightDigit + carry;

			result.unshift(sum % 10);
			carry = Math.floor(sum / 10);
		}

		if (carry > 0) {
			result.unshift(carry);
		}

		while (result.length > 1 && result[0] === 0) {
			result.shift();
		}

		return result;
	}
}

export const NumberUtilsFunc = () => {
	const add = (left: number[], right: number[]) => {
		left.reverse();
		right.reverse();

		const result: number[] = [];
		let carry = 0;
		for (let i = 0; i < Math.max(left.length, right.length); i++) {
			const leftDigit = left.length > i ? left[i] : 0;
			const rightDigit = right.length > i ? right[i] : 0;

			if (leftDigit < 0 || leftDigit > 9 || rightDigit < 0 || rightDigit > 9) {
				throw new IllegalArgumentError();
			}

			const sum = leftDigit + rightDigit + carry;

			result.unshift(sum % 10);
			carry = Math.floor(sum / 10);
		}

		if (carry > 0) {
			result.unshift(carry);
		}

		while (result.length > 1 && result[0] === 0) {
			result.shift();
		}

		return result;
	};

	return {
		add,
	};
};
