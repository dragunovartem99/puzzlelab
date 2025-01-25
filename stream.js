import { createReadStream } from "node:fs";

class PuzzleStream {
	#csv;
	#headers;
	#corruptedPuzzle = null;

	constructor(csv) {
		this.#csv = csv;
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

	flow() {
		createReadStream(this.#csv)
			.on("data", (chunk) => this.#manageChunk(chunk))
			.on("end", () => {
				console.timeEnd("read");
			});
	}
}

console.time("read");

new PuzzleStream("./samples/head-999.csv").flow();
//new PuzzleStream("/home/dragunovartem99/Data/lichess_db_puzzle.csv").flow();

