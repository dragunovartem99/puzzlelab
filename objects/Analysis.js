import csv from "csv-parser";

export class Analysis {
	#dataset;
	#onPuzzle;

	constructor({ dataset, onPuzzle }) {
		this.#dataset = dataset;
		this.#onPuzzle = onPuzzle;
	}

	run() {
		return new Promise((resolve) => {
			this.#dataset
				.stream()
				.pipe(csv())
				.on("data", this.#onPuzzle)
				.on("end", resolve);
		});
	}
}
