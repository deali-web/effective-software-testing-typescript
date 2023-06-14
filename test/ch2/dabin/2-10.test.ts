import { describe, test, expect } from 'vitest';
import { NumberUtilsFunc } from '../../../src/ch2/main/NumberUtils';

describe('add 메서드에 대한 테스트', () => {
    const shouldReturnCorrectResult = (
        left: number[],
        right: number[],
        expected: number[],
    ) => {
        expect(NumberUtilsFunc().add(left, right))
            .toEqual(expected);
    };

    const numbers = (...nums: number[]) => {
        const list: number[] = [];
        for (const n of nums) {
            list.push(n);
        }
        return list;
    };

    test('testCase', () => {
        // shouldReturnCorrectResult(null, numbers(7, 2), null); // T1
        shouldReturnCorrectResult(numbers(), numbers(7, 2), numbers(7, 2)); // T2 
        shouldReturnCorrectResult(numbers(9, 8), numbers(), numbers(9, 8)); // T4

        shouldReturnCorrectResult(numbers(9, 9, 8), numbers(1, 7, 2), numbers(1, 1, 7, 0)); // T12
    });
})