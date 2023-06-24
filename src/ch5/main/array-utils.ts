const ArrayUtils = () => {
	const indexOf = (
		array: number[],
		valueToFind: number,
		startIndex: number,
	) => {
		const validStartIndex = startIndex < 0 ? 0 : startIndex;

		for (let i = validStartIndex; i < array.length; i++) {
			if (valueToFind === array[i]) return i;
		}

		return -1;
	};

	return {
		indexOf,
	};
};

export default ArrayUtils;
