import { describe, test, expect } from 'vitest';
import leftPadUtils from '../main/left-pad-utils.ts';

describe('leftPad에 새롭게 추가한 세 가지 테스트', () => {
	test.each([
		['abc', 5, '--', '--abc'], // T10
		['abc', 5, '---', '--abc'], // T11
		['abc', 5, '-', '--abc'], // T12
	])(
		'leftPad(%s, %d, %s) -> %s',
		(originalStr, size, padString, expectedStr) => {
			expect(leftPadUtils().leftPad(originalStr, size, padString)).toEqual(
				expectedStr,
			);
		},
	);
});
