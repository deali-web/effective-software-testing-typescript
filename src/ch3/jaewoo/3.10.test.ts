import { describe, it, expect } from 'vitest';
import clumps from '../main/clumps.ts';

describe('3.10 예제', () => {
	const testClumps = (nums: number[], expectedNoOfClumps: number) => {
		expect(clumps().countClumps(nums)).equal(expectedNoOfClumps);
	};
	it('count num 100% coverage', () => {
		testClumps([], 0);
		// testClumps(null, 0);
		testClumps([1, 2, 2, 2, 1], 1);
		testClumps([1], 0);
	});
});
