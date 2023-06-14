import { describe, test, expect } from 'vitest';
import { StringUtilsFunc } from '../../../src/ch2/main/StringUtils';

describe('substringsBetween() 메서드에 대한 테스트를 탐색하는 과정', () => {
    test('simpleCase', () => {
        expect(StringUtilsFunc.substringBetween('abcd', 'a', 'd'))
        .toEqual(['bc']);
    });

    test('manySubstrings', () => {
        expect(StringUtilsFunc.substringBetween('abcdabcdab', 'a', 'd'))
        .toEqual(['bc', 'bc']);
    });

    test('openAndCloseTagsThatAreLongerThan1Char', () => {
        expect(StringUtilsFunc.substringBetween('aabcddaabfddaab', 'aa', 'dd'))
        .toEqual(['bc', 'bf']);
    });
});