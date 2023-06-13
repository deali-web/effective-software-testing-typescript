import { describe, it, expect } from 'vitest';
import { StringUtilsFunc } from '../main/StringUtils';

describe('2.5', () => {
	it('strOfLength1', () => {
		expect(StringUtilsFunc.substringBetween('a', 'a', 'b')).toEqual(null);
		expect(StringUtilsFunc.substringBetween('a', 'b', 'a')).toEqual(null);
		expect(StringUtilsFunc.substringBetween('a', 'b', 'b')).toEqual(null);
		expect(StringUtilsFunc.substringBetween('a', 'a', 'a')).toEqual(null);
	});
	it('openAndCloseOfLength1', () => {
		expect(StringUtilsFunc.substringBetween('abc', 'x', 'y')).toEqual(null);
		expect(StringUtilsFunc.substringBetween('abc', 'a', 'y')).toEqual(null);
		expect(StringUtilsFunc.substringBetween('abc', 'x', 'c')).toEqual(null);
		expect(StringUtilsFunc.substringBetween('abc', 'a', 'c')).toEqual(['b']);
		expect(StringUtilsFunc.substringBetween('abcabc', 'a', 'c')).toEqual([
			'b',
			'b',
		]);
	});
});
