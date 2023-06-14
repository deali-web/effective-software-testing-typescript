import { describe, it, expect } from 'vitest';
import { StringUtilsFunc } from '../main/StringUtils.ts';

describe('test 2-4', () => {
	it('open is null or empty', () => {
		expect(StringUtilsFunc.substringBetween('abc', null, 'd')).toEqual(null);
		expect(StringUtilsFunc.substringBetween('abc', '', 'd')).toEqual(null);
	});

	it('close is null or empty', () => {
		expect(StringUtilsFunc.substringBetween('abc', 'a', null)).toEqual(null);
		expect(StringUtilsFunc.substringBetween('abc', 'a', '')).toEqual(null);
	});
});
