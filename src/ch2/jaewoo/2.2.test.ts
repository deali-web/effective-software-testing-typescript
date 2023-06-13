import { describe, it, expect } from 'vitest';
import { StringUtilsFunc } from '../main/StringUtils';

describe('2.2', () => {
	it('simpleCase', () => {
		expect(StringUtilsFunc.substringBetween('abcd', 'a', 'd')).toEqual(['bc']);
	});
	it('manySubstrings', () => {
		expect(StringUtilsFunc.substringBetween('abcdabcdab', 'a', 'd')).toEqual([
			'bc',
			'bc',
		]);
	});
	it('openAndCloseTagsThatAreLongerThan1Char', () => {
		expect(
			StringUtilsFunc.substringBetween('aabcddaabfddaab', 'aa', 'dd'),
		).toEqual(['bc', 'bf']);
	});
});
