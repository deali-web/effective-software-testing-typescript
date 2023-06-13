const countWords = () => {
	const count = (str: string) => {
		let words = 0;
		let last = ' ';
		for (let i = 0; i < str.length; i++) {
			if (isNaN(+str.charAt(i)) && (last === 's' || last === 'r')) {
				words++;
			}
			last = str.charAt(i);
		}
		if (last === 'r' || last === 'r') words++;
		return words;
	};
	return { count };
};

export default countWords;
