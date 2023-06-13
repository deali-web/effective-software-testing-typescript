import { describe, it, expect } from 'vitest';

import { NumberUtilsFunc } from '../main/NumberUtils';

describe('2.10', () => {
	const shouldReturnCorrectResult = (
		left: number[],
		right: number[],
		expected: number[],
	) => {
		expect(NumberUtilsFunc().add(left, right)).toEqual(expected);
	};
	const number = (...args: number[]) => args;
	it('testCases', () => {
		// shouldReturnCorrectResult(null, number(7, 2), null);
		shouldReturnCorrectResult(number(), number(7, 2), number(7, 2));
		// shouldReturnCorrectResult(number(9,8), null, null);
		shouldReturnCorrectResult(number(9, 8), number(), number(9, 8));

		shouldReturnCorrectResult(number(1), number(2), number(3));
		shouldReturnCorrectResult(number(9), number(2), number(1, 1));

		shouldReturnCorrectResult(number(2, 2), number(3, 3), number(5, 5));
		shouldReturnCorrectResult(number(2, 9), number(2, 3), number(5, 2));
		shouldReturnCorrectResult(
			number(2, 9, 3),
			number(1, 8, 3),
			number(4, 7, 6),
		);
		shouldReturnCorrectResult(
			number(1, 7, 9),
			number(2, 6, 8),
			number(4, 4, 7),
		);
		shouldReturnCorrectResult(
			number(1, 9, 1, 7, 1),
			number(1, 8, 1, 6, 1),
			number(3, 7, 3, 3, 2),
		);
		shouldReturnCorrectResult(
			number(9, 9, 8),
			number(1, 7, 2),
			number(1, 1, 7, 0),
		);

		shouldReturnCorrectResult(number(2, 2), number(3), number(2, 5));
		shouldReturnCorrectResult(number(3), number(2, 2), number(2, 5));
		shouldReturnCorrectResult(number(2, 2), number(9), number(3, 1));
		shouldReturnCorrectResult(number(9), number(2, 2), number(3, 1));
		shouldReturnCorrectResult(number(1, 7, 3), number(9, 2), number(2, 6, 5));
		shouldReturnCorrectResult(number(9, 2), number(1, 7, 3), number(2, 6, 5));
		shouldReturnCorrectResult(
			number(3, 1, 7, 9),
			number(2, 6, 8),
			number(3, 4, 4, 7),
		);
		shouldReturnCorrectResult(
			number(2, 6, 8),
			number(3, 1, 7, 9),
			number(3, 4, 4, 7),
		);
		shouldReturnCorrectResult(
			number(1, 9, 1, 7, 1),
			number(2, 1, 8, 1, 6, 1),
			number(2, 3, 7, 3, 3, 2),
		);
		shouldReturnCorrectResult(
			number(2, 1, 8, 1, 6, 1),
			number(1, 9, 1, 7, 1),
			number(2, 3, 7, 3, 3, 2),
		);
		shouldReturnCorrectResult(
			number(9, 9, 8),
			number(9, 1, 7, 2),
			number(1, 0, 1, 7, 0),
		);
		shouldReturnCorrectResult(
			number(9, 1, 7, 2),
			number(9, 9, 8),
			number(1, 0, 1, 7, 0),
		);

		shouldReturnCorrectResult(
			number(0, 0, 0, 1, 2),
			number(0, 2, 3),
			number(3, 5),
		);
		shouldReturnCorrectResult(
			number(0, 0, 0, 1, 2),
			number(0, 2, 9),
			number(4, 1),
		);

		shouldReturnCorrectResult(number(9, 9), number(1), number(1, 0, 0));
	});
});
