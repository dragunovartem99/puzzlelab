export class PuzzleStream {
	#dataset;
	#onPuzzle;
	#headers = null;
	#corruptedPuzzle = null;

	constructor(dataset, onPuzzle) {
		this.#dataset = dataset;
		this.#onPuzzle = onPuzzle;
	}

	#manageChunk(chunk) {
		const puzzles = chunk.split("\n");

		if (!this.#headers) {
			this.#headers = puzzles.shift();
		}

		if (this.#corruptedPuzzle) {
			puzzles[0] = this.#corruptedPuzzle + puzzles[0];
			this.#corruptedPuzzle = null;
		}

		this.#corruptedPuzzle = puzzles.pop();

		if (this.#onPuzzle) {
			puzzles.forEach(this.#onPuzzle);
		}
	}

	run() {
		return new Promise((resolve) =>
			this.#dataset
				.read({ encoding: "ascii" })
				.on("data", (chunk) => this.#manageChunk(chunk))
				.on("end", resolve),
		);
	}
}
