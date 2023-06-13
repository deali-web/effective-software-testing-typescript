import { Estimate } from './Estimate.ts';

export class IllegalArgumentError extends Error {
	constructor(text: string) {
		super(text);
	}
}

export class PlanningPoker {
	public identifyExtremes(estimates: Estimate[]) {
		if (estimates.length <= 1) {
			throw new Error('There has to be more than 1 estimate in the list');
		}

		let lowestEstimate: Estimate | null = null;
		let highestEstimate: Estimate | null = null;

		for (const estimate of estimates) {
			if (
				highestEstimate == null ||
				estimate.getEstimate() > highestEstimate.getEstimate()
			) {
				highestEstimate = estimate;
			}
			if (
				lowestEstimate == null ||
				estimate.getEstimate() < lowestEstimate.getEstimate()
			) {
				lowestEstimate = estimate;
			}
		}

		if (lowestEstimate?.equals(highestEstimate)) return [];

		return [highestEstimate?.getDeveloper(), lowestEstimate?.getDeveloper()];
	}
}
