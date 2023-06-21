import { describe, it, expect } from 'vitest';
import leftPadUtils from '../main/left-pad-utils.ts';

describe('3.6 예제', () => {
	const test = (
		originalStr: string,
		size: number,
		padString: string,
		expectedStr: string,
	) => {
		expect(leftPadUtils().leftPad(originalStr, size, padString)).toEqual(
			expectedStr,
		);
	};
	it('leftPadTest', () => {
		// test(null, 10, '-', null);
		test('', 5, '-', '-----');
		test('abc', -1, '-', 'abc');
		// test('abc', 5, null, '  abc');
		test('abc', 5, '', '  abc');
		test('abc', 5, '-', '--abc');
		test('abc', 3, '-', 'abc');
		test('abc', 0, '-', 'abc');
		test('abc', 2, '-', 'abc');
	});
});
