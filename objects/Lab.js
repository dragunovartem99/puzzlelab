export class Lab {
	#analysis;

	constructor(analysis) {
		this.#analysis = analysis;
	}

	addGoal() {}

	async run() {
		await this.#analysis.run();
	}
}
