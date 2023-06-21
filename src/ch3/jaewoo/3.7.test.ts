import { describe, it, expect } from 'vitest';
import leftPadUtils from '../main/left-pad-utils.ts';

describe('3.7 예제', () => {
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
		test('abc', 5, '--', '--abc');
		test('abc', 5, '---', '--abc');
		test('abc', 5, '-', '--abc');
	});
});
