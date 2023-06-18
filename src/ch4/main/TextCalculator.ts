export const TextCalculator = () => {
	/**
	 * 세금을 계산한다.
	 * 이는 ... (여기에 설명을 추가한다)
	 * @param value 세금 계산을 위한 기본값. 값은 양수여야 한다.
	 * @return 계산한 세금. 세금은 항상 양수여야 한다.
	 */
	const calculateTax = (value: number): number => {
		// 사전 조건(pre-condition) 검사
		if (value < 0) {
			throw new Error('값은 음수가 될 수 없음.');
		}

		// eslint-disable-next-line prefer-const
		let taxValue = 0;

		// 여기에 복잡한 비즈니스 규칙을 작성한다
		// 최종 계산 결과가 'taxValue'에 담겨 있다

		// 사후 조건(post-condition) 검사
		if (taxValue < 0) {
			throw new Error('계산된 세금은 음수가 될 수 없음.');
		}

		return taxValue;
	};

	return {
		calculateTax,
	};
};
