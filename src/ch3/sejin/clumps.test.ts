import { describe, expect, test } from 'vitest';
import clumps from '../main/clumps.ts';

describe('예제 3.10', () => {
	test('', () => {
		const testCaseList = [
			{
				nums: [],
				expectedNoOfClumps: 0,
			},
			{
				nums: [1, 2, 2, 2, 1],
				expectedNoOfClumps: 1,
			},
			{
				nums: [1],
				expectedNoOfClumps: 0,
			},
		];

		const { countClumps } = clumps();

		testCaseList.forEach(({ nums, expectedNoOfClumps }) => {
			expect(countClumps(nums)).toBe(expectedNoOfClumps);
		});
	});
});
