import { IEstimate } from './Estimate.js';

export const PlanningPoker = (estimates: IEstimate[]) => {
	let lowestEstimate: null | IEstimate = null;
	let highestEstimate: null | IEstimate = null;

	for (const estimate of estimates) {
		if (
			highestEstimate === null ||
			estimate.getEstimate() > highestEstimate.getEstimate()
		) {
			highestEstimate = estimate;
		}

		if (
			lowestEstimate === null ||
			estimate.getEstimate() < lowestEstimate.getEstimate()
		) {
			lowestEstimate = estimate;
		}
	}

	return [lowestEstimate?.getDeveloper(), highestEstimate?.getDeveloper()];
};
