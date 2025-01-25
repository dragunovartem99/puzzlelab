import { pipeline } from "node:stream/promises";

export class Flow {
	#dataset;
	#stages;
	#writeStream;

	constructor(dataset, ...stages) {
		this.#dataset = dataset;
		this.#stages = stages;
	}

	setWriteStream() {
		this.#writeStream = writeStream;
	}

	async run() {
		await pipeline(this.#dataset.read(), ...this.#stages);
	}
}
