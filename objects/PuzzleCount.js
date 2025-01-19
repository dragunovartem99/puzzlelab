export class PuzzleCount {
	#analysis;
	#condition;

	constructor({ analysis, condition }) {
		this.#analysis = analysis;
		this.#condition = condition;
	}

	async run() {
		let puzzleCount = 0;

		await this.#analysis
			.addReaction((puzzle) => {
				if (this.#condition(puzzle)) {
					puzzleCount++;
				}
			})
			.run();

		return puzzleCount;
	}
}
