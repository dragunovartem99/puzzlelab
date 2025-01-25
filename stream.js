import { Readable } from "node:stream";
import { createReadStream } from "node:fs";

class PuzzleStream {
	#csv;
	#headers;
	#brokenPuzzle;

	constructor(csv) {
		this.#csv = csv;
	}

	flow() {
		let count = 0;
		createReadStream(this.#csv)
			.on("data", (chunk) => {
				const puzzles = chunk.toString().split(/\n/);
				this.#brokenPuzzle = puzzles.pop();
				count++
			})
			.on("end", () => {
				console.log(count);
				console.timeEnd("read");
			});
	}
}

console.time("read");

new PuzzleStream("/home/dragunovartem99/Data/lichess_db_puzzle.csv").flow();

