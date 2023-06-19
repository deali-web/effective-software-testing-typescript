const isLetter = (str: string) =>
	str.length === 1 && str.toLowerCase() !== str.toUpperCase();

const countWords = () => {
	const count = (str: string) => {
		let words = 0;
		let last = ' ';
		for (let i = 0; i < str.length; i++) {
			if (!isLetter(str.charAt(i)) && (last === 's' || last === 'r')) {
				words++;
			}
			last = str.charAt(i);
		}
		if (last === 's' || last === 'r') words++;
		return words;
	};
	return { count };
};

export default countWords;
