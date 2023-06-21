import { describe, it, expect } from 'vitest';
import leftPadUtils from '../main/left-pad-utils.ts';

describe('3.8 예제', () => {
	it('sameInstance', () => {
		const str = 'sometext';
		expect(leftPadUtils().leftPad(str, 5, '-')).toEqual(str);
	});
});
