import { Transform } from "node:stream";

export class Stage extends Transform {
	#performance;
	#headers = null;
	#corruptedPuzzle = null;

	constructor(performance) {
		super({ objectMode: true });
		this.#performance = performance;
	}

	_getPuzzles(puzzles) {
		return this.#performance ? this.#performance(puzzles) : puzzles;
	}

	_transform(chunk, _, callback) {
		const puzzles = chunk.split("\n");

		this.#headers ?? (this.#headers = puzzles.shift());

		if (this.#corruptedPuzzle) {
			puzzles[0] = this.#corruptedPuzzle + puzzles[0];
			this.#corruptedPuzzle = null;
		}

		this.#corruptedPuzzle = puzzles.pop();

		this.push(this._getPuzzles(puzzles).join("\n") + "\n");

		callback();
	}
}
