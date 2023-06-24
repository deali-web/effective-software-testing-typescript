const mathArrays = () => {
	const unique = (data: number[]) => {
		if (!data) throw new Error('data is null');

		const values: Set<number> = new Set(data);

		const count: number = values.size;

		const out: number[] = new Array(count);

		let i = 0;

		values.forEach((value) => {
			out[count - ++i] = value;
		});

		return out;
	};

	return {
		unique,
	};
};

export default mathArrays;
