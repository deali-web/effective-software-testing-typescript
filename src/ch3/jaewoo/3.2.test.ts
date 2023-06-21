import { describe, it } from 'vitest';
import countWords from '../main/count-words.ts';

describe('3.2 예제', () => {
	it('twoWordsEndingWithS', ({ expect }) => {
		const words = countWords().count('dogs cats');
		expect(words).equal(2);
	});

	it('noWordsAtAll', ({ expect }) => {
		const words = countWords().count('dog cat');
		expect(words).equal(0);
	});
});
