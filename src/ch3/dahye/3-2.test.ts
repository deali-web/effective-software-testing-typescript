import { expect, describe, it } from 'vitest';
import CountWords from '../main/count-words.ts';

describe('3-2', () => {
	it('two words ending with S', () => {
		expect(CountWords().count('dogs cats')).toBe(2);
	});

	it('no words at all', () => {
		expect(CountWords().count('dog cat')).toBe(0);
	});
});
