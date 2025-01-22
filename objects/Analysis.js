import csv from "csv-parser";

export class Analysis {
	#dataset;
	#actions = new Set();
	#filters = [];

	constructor(dataset) {
		this.#dataset = dataset;
	}

	addAction(action) {
		this.#actions.add(action);
		return this;
	}

	addFilter(filter) {
		this.#filters.push(filter);
		return this;
	}

	#reactTo(puzzle) {
		if (this.#filters.some((filter) => !filter.check(puzzle))) {
			return;
		}

		this.#actions.forEach((action) => action(puzzle))
	}

	run() {
		return new Promise((resolve) => {
			this.#dataset
				.read()
				.pipe(csv())
				.on("data", (puzzle) => this.#reactTo(puzzle))
				.on("end", resolve);
		});
	}
}
