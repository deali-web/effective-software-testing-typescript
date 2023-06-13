import { describe, it, expect } from 'vitest';
import { StringUtilsFunc } from '../main/StringUtils';

describe('2.6', () => {
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
	});
});
