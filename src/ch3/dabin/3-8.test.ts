import { describe, test, expect } from 'vitest';
import leftPadUtils from '../main/left-pad-utils.ts';

describe('leftPad 메서드에 대한 또 다른 테스트', () => {
	test('sameInstance', () => {
		const str = 'sometext';
		expect(leftPadUtils().leftPad(str, 5, '-')).toBe(str);
	});
});
