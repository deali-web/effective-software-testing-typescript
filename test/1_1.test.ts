interface IEstimates {
	estimate: number;
	developer: string;
	getEstimates: () => number;
	getDeveloper: () => string;
}

type TNullable<T> = T | null;

const plannigPoker = (estimatesList: IEstimates[]) => {
	const identifyExtremes = () => {
		let lowestEstimate: TNullable<IEstimates> = null;
		let highestEstimate: TNullable<IEstimates> = null;

		estimatesList.forEach((estimate) => {
			if (
				highestEstimate === null ||
				estimate.getEstimates() > highestEstimate.getEstimates()
			) {
				highestEstimate = { ...estimate };
			}

			if (
				lowestEstimate === null ||
				estimate.getEstimates() < lowestEstimate?.getEstimates()
			) {
				lowestEstimate = { ...estimate };
			}

			return [lowestEstimate.getDeveloper(), highestEstimate.getDeveloper()];
		});
	};
};
