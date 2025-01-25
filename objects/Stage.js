import { Transform } from "node:stream";

export class Stage extends Transform {
	#corruptedPuzzle = null;

	constructor() {
		super({ objectMode: true });
	}

	_getPuzzles(puzzles) {
		return puzzles;
	}

	_transform(chunk, _, callback) {
		const puzzles = chunk.split("\n");

		if (this.#corruptedPuzzle) {
			puzzles[0] = this.#corruptedPuzzle + puzzles[0];
			this.#corruptedPuzzle = null;
		}

		this.#corruptedPuzzle = puzzles.pop();

		this.push(this._getPuzzles(puzzles).join("\n") + "\n");

		callback();
	}
}
