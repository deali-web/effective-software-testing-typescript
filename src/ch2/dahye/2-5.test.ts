import { describe, it, expect } from 'vitest';
import { StringUtilsFunc } from '../main/StringUtils.ts';

describe('test 2-5', () => {
	it('string of length 1', () => {
		expect(StringUtilsFunc.substringBetween('a', 'a', 'b')).toEqual(null);
		expect(StringUtilsFunc.substringBetween('a', 'b', 'a')).toEqual(null);
		expect(StringUtilsFunc.substringBetween('a', 'b', 'b')).toEqual(null);
		expect(StringUtilsFunc.substringBetween('a', 'a', 'a')).toEqual(null);
	});

	it('open and close of length 1', () => {
		expect(StringUtilsFunc.substringBetween('abc', 'x', 'y')).toEqual(null);
		expect(StringUtilsFunc.substringBetween('abc', 'a', 'y')).toEqual(null);
		expect(StringUtilsFunc.substringBetween('abc', 'x', 'c')).toEqual(null);
		expect(StringUtilsFunc.substringBetween('abc', 'a', 'c')).toStrictEqual([
			'b',
		]);
		expect(StringUtilsFunc.substringBetween('abcabc', 'a', 'c')).toStrictEqual([
			'b',
			'b',
		]);
	});
});
