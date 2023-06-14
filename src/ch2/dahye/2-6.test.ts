import { describe, it, expect } from 'vitest';
import { StringUtilsFunc } from '../main/StringUtils.ts';

describe('test 2-6', () => {
	it('open and close tangs of different sizes', () => {
		expect(StringUtilsFunc.substringBetween('aabcc', 'xx', 'yy')).toEqual(null);
		expect(StringUtilsFunc.substringBetween('aabcc', 'aa', 'yy')).toEqual(null);
		expect(StringUtilsFunc.substringBetween('aabcc', 'xx', 'cc')).toEqual(null);
		expect(
			StringUtilsFunc.substringBetween('aabbcc', 'aa', 'cc'),
		).toStrictEqual(['bb']);
		expect(
			StringUtilsFunc.substringBetween('aabbccaaeecc', 'aa', 'cc'),
		).toStrictEqual(['bb', 'ee']);
	});
});
