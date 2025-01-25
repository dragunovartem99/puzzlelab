import { Transform } from "node:stream";

export class Transformer extends Transform {
	#corruptedPuzzle = null;

	constructor() {
		super({ objectMode: true });
	}

	_transform(chunk, _, callback) {
		const puzzles = chunk.split("\n");

		if (this.#corruptedPuzzle) {
			puzzles[0] = this.#corruptedPuzzle + puzzles[0];
			this.#corruptedPuzzle = 0;
		}

		this.#corruptedPuzzle = puzzles.pop();

		this.push(puzzles.join("\n") + "\n");
		callback();
	}
}
