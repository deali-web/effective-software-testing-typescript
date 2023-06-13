import { describe, it, expect } from 'vitest';
import { StringUtilsFunc } from '../main/StringUtils.ts';

describe('test 2-3', () => {
	it('string is null or empty', () => {
		expect(StringUtilsFunc.substringBetween(null, 'a', 'd')).toEqual(null);
		expect(StringUtilsFunc.substringBetween('', 'a', 'd')).toStrictEqual([]);
	});
});
