import { describe, test, expect } from 'vitest';
import clumps from '../main/clumps';

describe('덩어리 수 세기 문제에 대한 100% 분기 커버리지', () => {
	test.each([
		[[], 0], // T1
		// [null, 0], // T2
		[[1, 2, 2, 2, 1], 1], // T3 한 덩어리
		[[1], 0], // T4 요소 하나
	])('countClumps(%o) -> %d', (nums: number[], expectedNoOfClumps: number) => {
		expect(clumps().countClumps(nums)).toEqual(expectedNoOfClumps);
	});
});
