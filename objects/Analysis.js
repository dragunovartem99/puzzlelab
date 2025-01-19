import csv from "csv-parser";

export class Analysis {
	#dataset;
	#onData;
	#onEnd;

	constructor({ dataset, onData, onEnd }) {
		this.#dataset = dataset;
		this.#onData = onData;
		this.#onEnd = onEnd;
	}

	run() {
		this.#dataset
			.stream()
			.pipe(csv())
			.on("data", this.#onData)
			.on("end", this.#onEnd);
	}
}
