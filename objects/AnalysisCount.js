export class AnalysisCount {
	#analysis;
	#count;

	constructor(analysis) {
		this.#analysis = analysis;
	}

	addCondition(condition) {
		this.#analysis.addReaction((puzzle) =>
			condition(puzzle) && this.#count++
		);
		return this;
	}

	async run() {
		this.#count = 0;
		await this.#analysis.run();
		return this.#count;
	}
}
