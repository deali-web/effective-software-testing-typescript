import { describe, it, expect } from 'vitest';
import { StringUtilsFunc } from '../main/StringUtils';

describe('2.4', () => {
	it('openIsEmpty', () => {
		// 예제에서는 Null or empty case 이지만 typescript에서 Null인 경우 충분히 판별할 수 있기 때문에 제외
		// expect(StringUtilsFunc.substringBetween('abc', null, 'b')).toEqual(null);
		expect(StringUtilsFunc.substringBetween('abc', '', 'b')).toEqual(null);
	});
	it('closeIsEmpty', () => {
		// 예제에서는 Null or empty case 이지만 typescript에서 Null인 경우 충분히 판별할 수 있기 때문에 제외
		// expect(StringUtilsFunc.substringBetween('abc', 'a', null)).toEqual(null);
		expect(StringUtilsFunc.substringBetween('abc', 'a', '')).toEqual(null);
	});
});
