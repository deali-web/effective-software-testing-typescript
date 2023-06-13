import { describe, it, expect } from 'vitest';
import { StringUtilsFunc } from '../main/StringUtils.ts';

describe('test 2-2', () => {
	it('simple case', () => {
		expect(StringUtilsFunc.substringBetween('abcd', 'a', 'd')).toStrictEqual([
			'bc',
		]);
	});

	it('many substrings', () => {
		expect(
			StringUtilsFunc.substringBetween('abcdabcdab', 'a', 'd'),
		).toStrictEqual(['bc', 'bc']);
	});

	it('open and close tags that are longer than 1 char', () => {
		expect(
			StringUtilsFunc.substringBetween('aabcddaabfddaabb', 'aa', 'dd'),
		).toStrictEqual(['bc', 'bf']);
	});
});
