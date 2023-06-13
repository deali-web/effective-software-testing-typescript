import { describe, it, expect } from 'vitest';

import { NumberUtilsFunc } from '../main/NumberUtils';

describe('2.13', () => {
	const shouldThrowExceptionWhenDigitsAreOutOfRange = (
		left: number[],
		right: number[],
	) => {
		expect(() => NumberUtilsFunc().add(left, right)).toThrowError(
			'Digits must be between 0 and 9',
		);
	};
	const number = (...args: number[]) => args;
	it('digitsOutOfRange', () => {
		shouldThrowExceptionWhenDigitsAreOutOfRange(number(1, -1, 1), number(1));
		shouldThrowExceptionWhenDigitsAreOutOfRange(number(1), number(1, -1, 1));

		shouldThrowExceptionWhenDigitsAreOutOfRange(number(1, 10, 1), number(1));
		shouldThrowExceptionWhenDigitsAreOutOfRange(number(1), number(1, 10, 1));
	});
});
