import { Transform } from "node:stream";

export class Stage extends Transform {
	#action;

	#headers = null;
	#cutPuzzle = null;

	constructor(action) {
		super({ writableObjectMode: true });
		this.#action = action;
	}

	_getPuzzles(puzzles) {
		return this.#action ? this.#action(puzzles) : puzzles;
	}

	_transform(chunk, _, callback) {
		const newLine = "\n";
		const puzzles = chunk.split(newLine);

		if (this.#cutPuzzle) {
			puzzles[0] = this.#cutPuzzle.concat(puzzles[0]);
		}

		this.#cutPuzzle = puzzles.pop();
		this.#headers ??= puzzles.shift();

		this.push(this._getPuzzles(puzzles).join(newLine).concat(newLine));
		callback();
	}
}
