import { describe, expect, test } from 'vitest';
import leftPadUtils from '../main/left-pad-utils.ts';

describe('예제 3.6', () => {
	test('leftPadTest', () => {
		const testCaseList = [
			// [null, 10, '-', null],
			['', 5, '-', '-----'],
			['abc', -1, '-', 'abc'],
			// ['abc', 5, null, '  abc'],
			['abc', 5, '', '  abc'],
			['abc', 5, '-', '--abc'],
			['abc', 3, '-', 'abc'],
			['abc', 0, '-', 'abc'],
			['abc', 2, '-', 'abc'],
		];

		testCaseList.forEach(([originalStr, size, padString, expectedStr]) => {
			expect(leftPadUtils().leftPad(originalStr, size, padString)).toBe(
				expectedStr,
			);
		});
	});
});
