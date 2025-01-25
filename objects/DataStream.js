export class DataStream {
	#dataset;
	#headers;
	#corruptedPuzzle;

	constructor(dataset) {
		this.#dataset = dataset;
	}

	#manageChunk(chunk) {
		const puzzles = chunk.toString().split(/\n/);

		if (!this.#headers) {
			this.#headers = puzzles.shift();
		}

		if (this.#corruptedPuzzle) {
			puzzles[0] = this.#corruptedPuzzle + puzzles[0];
			this.#corruptedPuzzle = null;
		}

		this.#corruptedPuzzle = puzzles.pop();
	}

	run() {
		return new Promise((resolve) =>
			this.#dataset
				.read()
				.on("data", (chunk) => this.#manageChunk(chunk))
				.on("end", resolve),
		);
	}
}
