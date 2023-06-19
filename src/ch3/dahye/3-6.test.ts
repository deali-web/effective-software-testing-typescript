import { expect, describe, it } from 'vitest';
import LeftPadUtils from '../main/left-pad-utils.ts';

describe.each([
	[null, 10, '-', null],
	['', 5, '-', '-----'],
	['abc', -1, '-', 'abc'],
	['abc', 5, null, '  abc'],
	['abc', 5, '', '  abc'],
	['abc', 5, '-', '--abc'],
	['abc', 3, '-', 'abc'],
	['abc', 0, '-', 'abc'],
	['abc', 5, '--', '--abc'],
	['abc', 5, '---', '--abc'],
	['abc', 5, '-', '--abc'],
])('3-6', (originalStr, size, padString, expectedStr) => {
	it('left pad', () => {
		expect(LeftPadUtils().leftPad(originalStr, size, padString)).toBe(
			expectedStr,
		);
	});

	it('same instance', () => {
		const randomStr = Math.random().toString();
		const leftPadUtils = LeftPadUtils();
		expect(leftPadUtils.leftPad(randomStr, 5, '-')).toBe(randomStr);
	});
});
