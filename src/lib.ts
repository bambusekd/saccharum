interface SaccharumProps {
	sg: number;
}

export class Saccharum {
	sg: number;

	constructor(options: SaccharumProps) {
		this.sg = options.sg;
	}

	sgToBrix(sg: number): number {
		return (
			182.4601 * Math.pow(sg, 3) -
			775.6821 * Math.pow(sg, 2) +
			1262.7794 * sg -
			669.5622
		);
	}
}
