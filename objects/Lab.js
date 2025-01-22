export class Lab {
	#jobName;
	#options;

	constructor(jobName, options) {
		this.#jobName = jobName;
		this.#options = options;
	}

	run() {
		console.log(this.#jobName);
		console.log(this.#options);
	}
}
