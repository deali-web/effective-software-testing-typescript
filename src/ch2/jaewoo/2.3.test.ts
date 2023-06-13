import { describe, it, expect } from 'vitest';
import { StringUtilsFunc } from '../main/StringUtils';

describe('2.3', () => {
	it('strIsEmpty', () => {
		// 예제에서는 Null or empty case 이지만 typescript에서 Null인 경우 충분히 판별할 수 있기 때문에 제외
		// expect(StringUtilsFunc.substringBetween(null, 'a', 'b')).toEqual(null);
		expect(StringUtilsFunc.substringBetween('', 'a', 'b')).toEqual([]);
	});
});
