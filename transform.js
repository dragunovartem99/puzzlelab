import { createReadStream, createWriteStream } from "node:fs";
import { Transform } from "node:stream";

export class PuzzleReader extends Transform {
	#onPuzzle;
	#corruptedPuzzle = null;

	constructor(onPuzzle) {
		super({ objectMode: true });
		this.#onPuzzle = onPuzzle;
	}

	_transform(chunk, _, callback) {
		const puzzles = chunk.split("\n");

		if (this.#corruptedPuzzle) {
			puzzles[0] = this.#corruptedPuzzle + puzzles[0];
			this.#corruptedPuzzle = 0;
		}

		this.#corruptedPuzzle = puzzles.pop();

		if (this.#onPuzzle) {
			puzzles.forEach(this.#onPuzzle);
		}

		this.push(puzzles.join("\n") + "\n");
		callback();
	}
}

const myTransform = new PuzzleReader();

createReadStream("./samples/head-999.csv", { encoding: "ascii" })
	.pipe(myTransform)
	.pipe(createWriteStream("./hey.csv"))
