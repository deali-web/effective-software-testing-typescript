import { describe, it, expect } from 'vitest';
import { StringUtilsFunc } from '../main/StringUtils';

describe('2.7', () => {
	it('noSubstringBetweenOpenAndCloseTags', () => {
		expect(StringUtilsFunc.substringBetween('aabb', 'aa', 'bb')).toEqual(['']);
	});
});
