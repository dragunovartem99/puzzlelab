import { pipeline } from "node:stream/promises";
import { createWriteStream } from "node:fs";

export class Flow {
	#dataset;
	#stages;
	#writeStream = createWriteStream("/dev/null");

	constructor(dataset, ...stages) {
		this.#dataset = dataset;
		this.#stages = stages;
	}

	setWriteStream(writeStream) {
		this.#writeStream = writeStream;
		return this;
	}

	async run() {
		await pipeline(this.#dataset.read(), ...this.#stages, this.#writeStream);
	}
}
