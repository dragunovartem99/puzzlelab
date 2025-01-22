export class AnalysisCount {
	#analysis;
	#count;

	constructor(analysis) {
		this.#analysis = analysis;
	}

	addFilter(filter) {
		this.#analysis.addReaction((puzzle) => filter(puzzle) && this.#count++);
		return this;
	}

	async run() {
		this.#count = 0;
		await this.#analysis.run();
		return this.#count;
	}
}
