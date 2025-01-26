import { Transform } from "node:stream";

export class Stage extends Transform {
	#action;

	#headers = null;
	#cutPuzzle = null;

	constructor(action) {
		super({ writableObjectMode: true });
		this.#action = action;
	}

	#getPuzzles(puzzles) {
		return this.#action ? this.#action(puzzles) : puzzles;
	}

	#pushPuzzles(puzzles, newLine) {
		if (!puzzles.length) return;
		this.push(puzzles.join(newLine).concat(newLine));
	}

	_transform(chunk, _, callback) {
		const newLine = "\n";
		const puzzles = chunk.split(newLine);

		if (this.#cutPuzzle) {
			puzzles[0] = this.#cutPuzzle.concat(puzzles[0]);
		}

		this.#cutPuzzle = puzzles.pop();
		this.#headers ??= puzzles.shift();

		this.#pushPuzzles(this.#getPuzzles(puzzles), newLine);
		callback();
	}
}
