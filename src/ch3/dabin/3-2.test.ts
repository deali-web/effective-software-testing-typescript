import { describe, test, expect } from 'vitest';
import countWords from '../main/count-words.ts';

describe('3.2 CountWords에 관한 첫 번째(불완전한) 테스트', () => {
	test('twoWordsEndingWithS', () => {
		const words = countWords().count('dogs cats');
		expect(words).toEqual(2);
	});

	test('noWordsAtAll', () => {
		const words = countWords().count('dog cat');
		expect(words).toEqual(0);
	});
});
