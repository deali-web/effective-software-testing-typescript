import { expect, describe, it } from 'vitest';
import CountWords from '../main/count-words.ts';

describe('3-3', () => {
	it('words that end in R', () => {
		expect(CountWords().count('car bar')).toBe(2);
	});
});
