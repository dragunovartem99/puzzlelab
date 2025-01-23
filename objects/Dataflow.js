import csv from "csv-parser";

export class Dataflow {
	#dataset;
	#onData;

	constructor(dataset, onData) {
		this.#dataset = dataset;
		this.#onData = onData;
	}

	run() {
		return new Promise((resolve) => {
			this.#dataset.read().pipe(csv()).on("data", this.#onData).on("end", resolve);
		});
	}
}
