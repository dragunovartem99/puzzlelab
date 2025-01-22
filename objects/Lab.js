export class Lab {
	#dataset;
	#job;

	constructor(dataset, job) {
		this.#dataset = dataset;
		this.#job = job;
	}

	run() {
		this.#job.run();
	}
}
