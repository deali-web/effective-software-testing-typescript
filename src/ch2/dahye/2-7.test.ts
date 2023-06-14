import { describe, it, expect } from 'vitest';
import { StringUtilsFunc } from '../main/StringUtils.ts';

describe('test 2-7', () => {
	it('no substring between open and close tags', () => {
		expect(StringUtilsFunc.substringBetween('aabb', 'aa', 'bb')).toStrictEqual([
			'',
		]);
	});
});
