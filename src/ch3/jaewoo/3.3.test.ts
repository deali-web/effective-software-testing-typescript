import { describe, it } from 'vitest';
import countWords from '../main/count-words.ts';

describe('3.3 예제', () => {
	it('wordsThatEndInR', ({ expect }) => {
		const words = countWords().count('car bar');
		expect(words).equal(2);
	});
});
