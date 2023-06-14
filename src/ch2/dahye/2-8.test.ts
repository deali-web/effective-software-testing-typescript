import { describe, it, expect } from 'vitest';
import { StringUtilsFunc } from '../main/StringUtils.ts';

describe('test 2-7', () => {
	it('open and close of length 1', () => {
		expect(
			StringUtilsFunc.substringBetween('abcabyt byrc', 'a', 'c'),
		).toStrictEqual(['b', 'byt byr']);
	});

	it('open and close tags of different sizes', () => {
		expect(
			StringUtilsFunc.substringBetween('a abb ddc ca abbcc', 'a a', 'c c'),
		).toStrictEqual(['bb dd']);
	});
});
