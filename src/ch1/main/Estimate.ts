import hash from 'object-hash';

export class Estimate {
	constructor(
		private readonly developer: string,
		private readonly estimate: number,
	) {
		this.developer = developer;
		this.estimate = estimate;
	}

	public getDeveloper() {
		return this.developer;
	}

	public getEstimate() {
		return this.estimate;
	}

	public toString() {
		return `Estimate{developer=${this.developer}, estimate=${this.estimate}}`;
	}

	public equals(obj: unknown) {
		if (this === obj) {
			return true;
		}

		if (!(obj instanceof Estimate)) {
			return false;
		}

		return this.developer === obj.developer && this.estimate === obj.estimate;
	}

	public hashCode() {
		return hash({
			developer: this.developer,
			estimate: this.estimate,
		});
	}
}
