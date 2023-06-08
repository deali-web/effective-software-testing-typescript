import hash from 'object-hash';

export interface IEstimate {
	getDeveloper: () => string;
	getEstimate: () => number;
	toString: () => string;
	equals: (o: unknown) => boolean;
	hashCode: () => number;
}

export const Estimate = (): IEstimate => {
	const developer = '';
	const estimate = 0;

	const getDeveloper = () => {
		return developer;
	};

	const getEstimate = () => {
		return estimate;
	};

	const toString = () => {
		return `Estimate{developer=${developer}, estimate=${estimate}}`;
	};

	const equals = (o: unknown) => {
		if (this === o) return true;
		if (o === null) return false;
		if (!(o instanceof Estimate)) return false;
		const estimate1 = o as IEstimate;

		return (
			estimate === estimate1.getEstimate() &&
			developer === estimate1.getDeveloper()
		);
	};

	const hashCode = () => {
		return hash({ developer, estimate });
	};

	return Object.freeze({
		getDeveloper,
		getEstimate,
		toString,
		equals,
		hashCode,
	});
};
