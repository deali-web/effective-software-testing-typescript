const passingGrade = () => {
	const passed = (grade: number) => {
		const isError = grade < 1 || grade > 10;

		if (isError) throw new Error();

		return grade >= 5;
	};

	return {
		passed,
	};
};

export default passingGrade;
