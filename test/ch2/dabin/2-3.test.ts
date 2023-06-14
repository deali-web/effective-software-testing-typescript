import { describe, test, expect } from 'vitest';
import { StringUtilsFunc } from '../../../src/ch2/main/StringUtils';

describe('substringsBetween에 대한 테스트, 파트 1', () => {
    test('strIsNullOrEmpty', () => {
        // expect(StringUtilsFunc.substringBetween(null, 'a', 'd'))
        // .toEqual(null);

        expect(StringUtilsFunc.substringBetween('', 'a', 'd'))
        .toEqual([]);
    });
});