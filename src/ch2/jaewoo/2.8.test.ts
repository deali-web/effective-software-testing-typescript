import { describe, it, expect } from 'vitest';
import { StringUtilsFunc } from '../main/StringUtils';

describe('2.8', () => {
	it('openAndCloseOfLength1', () => {
		expect(StringUtilsFunc.substringBetween('abc', 'x', 'y')).toEqual(null);
		expect(StringUtilsFunc.substringBetween('abc', 'a', 'y')).toEqual(null);
		expect(StringUtilsFunc.substringBetween('abc', 'x', 'c')).toEqual(null);
		expect(StringUtilsFunc.substringBetween('abc', 'a', 'c')).toEqual(['b']);
		expect(StringUtilsFunc.substringBetween('abcabc', 'a', 'c')).toEqual([
			'b',
			'b',
		]);
		expect(StringUtilsFunc.substringBetween('abcabyt byrc', 'a', 'c')).toEqual([
			'b',
			'byt byr',
		]);
	});
	it('openAndCloseTagsOfDifferentSizes', () => {
		expect(StringUtilsFunc.substringBetween('aabcc', 'xx', 'yy')).toEqual(null);
		expect(StringUtilsFunc.substringBetween('aabcc', 'aa', 'yy')).toEqual(null);
		expect(StringUtilsFunc.substringBetween('aabcc', 'xx', 'cc')).toEqual(null);
		expect(StringUtilsFunc.substringBetween('aabbcc', 'aa', 'cc')).toEqual([
			'bb',
		]);
		expect(
			StringUtilsFunc.substringBetween('aabbccaaeecc', 'aa', 'cc'),
		).toEqual(['bb', 'ee']);
		expect(
			StringUtilsFunc.substringBetween('a abb ddc ca abbcc', 'a a', 'c c'),
		).toEqual(['bb dd']);
	});
});
