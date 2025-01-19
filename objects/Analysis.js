import csv from "csv-parser";

export class Analysis {
	#dataset;
	#onPuzzle;

	constructor(dataset) {
		this.#dataset = dataset;
	}

	addReaction(reaction) {
		this.#onPuzzle = reaction;
		return this;
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
