import { describe, expect, test } from 'vitest';
import CountWords from '../main/count-words.ts';

describe('예제 3.2', () => {
	test('twoWordsEndingWithS', () => {
		const words: number = CountWords().count('dogs cats');

		expect(words).toBe(2);
	});

	test('noWordsAtAll', () => {
		const words: number = CountWords().count('dog cat');

		expect(words).toBe(0);
	});
});
