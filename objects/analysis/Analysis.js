import csv from "csv-parser";

export class Analysis {
	#dataset;
	#reactions = new Set();

	constructor(dataset) {
		this.#dataset = dataset;
	}

	addReaction(reaction) {
		this.#reactions.add(reaction);
		return this;
	}

	run() {
		return new Promise((resolve) => {
			this.#dataset
				.stream()
				.pipe(csv())
				.on("data", (puzzle) => {
					this.#reactions.forEach((reaction) => reaction(puzzle));
				})
				.on("end", resolve);
		});
	}
}
