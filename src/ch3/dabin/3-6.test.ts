import { describe, test, expect } from 'vitest';
import leftPadUtils from '../main/left-pad-utils.ts';

describe('명세 기반 테스트를 수행한 후의 leftPad에 대한 자동 테스트', () => {
	test.each([
		// string 파라미터에 null 들어가는 테스트 제외
		// [null, 10, '-', null], // T1 null 값 ts 제외
		['', 5, '-', '-----'], // T2
		['abc', -1, '-', 'abc'], // T3
		['abc', 5, '', '  abc'], // T5
		['abc', 5, '-', '--abc'], // T6
		['abc', 3, '-', 'abc'], // T7
		['abc', 0, '-', 'abc'], // T8
		['abc', 2, '-', 'abc'], // T9
	])(
		'leftPad(%s, %d, %s) -> %s',
		(originalStr, size, padString, expectedStr) => {
			expect(leftPadUtils().leftPad(originalStr, size, padString)).toEqual(
				expectedStr,
			);
		},
	);
});
