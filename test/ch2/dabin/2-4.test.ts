import { describe, test, expect } from 'vitest';
import { StringUtilsFunc } from '../../../src/ch2/main/StringUtils';

describe('substringsBetween에 대한 테스트, 파트 2', () => {
    test('openIsNullOrEmpty', () => {
        // expect(StringUtilsFunc.substringBetween('abc', null, 'b'))
        // .toEqual(null);

        expect(StringUtilsFunc.substringBetween('abc', '', 'b'))
        .toEqual(null);
    });

    test('closeIsNullOrEmpty', () => {
        // expect(StringUtilsFunc.substringBetween('abc', 'a', null))
        // .toEqual(null);

        expect(StringUtilsFunc.substringBetween('abc', 'a', ''))
        .toEqual(null);
    });
});