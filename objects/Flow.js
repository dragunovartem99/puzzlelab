export class Flow {
	#dataset;
	#transformer;
	#writeStream;

	constructor(dataset, transformer, writeStream) {
		this.#dataset = dataset;
		this.#transformer = transformer;
		this.#writeStream = writeStream;
	}

	run() {
		this.#dataset
			.read()
			.pipe(this.#transformer)
			.pipe(this.#writeStream)
	}
}
