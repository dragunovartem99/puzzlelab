import { pipeline } from 'node:stream/promises';

export class Flow {
	#dataset;
	#writeStream;
	#stages;

	constructor(dataset, writeStream, ...stages) {
		this.#dataset = dataset;
		this.#writeStream = writeStream;
		this.#stages = stages;
	}

	run() {
		pipeline(
			this.#dataset.read(),
			...this.#stages,
			this.#writeStream
		);
	}
}
