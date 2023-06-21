import { describe, it, expect } from 'vitest';
import Clumps from '../main/clumps.ts';
describe('3-9', () => {
	it('empty array', () => {
		expect(Clumps().countClumps([])).toBe(0);
	});

	it('1 element', () => {
		expect(Clumps().countClumps([1])).toBe(0);
	});

	it('non of same', () => {
		expect(Clumps().countClumps([1, 2, 1])).toBe(0);
	});

	it('one clump', () => {
		expect(Clumps().countClumps([2, 2, 1])).toBe(1);
		expect(Clumps().countClumps([1, 2, 2])).toBe(1);
		expect(Clumps().countClumps([1, 2, 2, 2, 3])).toBe(1);
	});

	it('more than one clumps', () => {
		expect(Clumps().countClumps([2, 2, 1, 3, 3])).toBe(2);
	});
});
