import { createWriteStream } from "node:fs";
import { Flow } from "./Flow.js";
import { Stage } from "./Stage.js";

export class Lab {
	#dataset;
	#requirements;

	constructor(dataset, requirements) {
		this.#dataset = dataset;
		this.#requirements = requirements;
	}

	#getAction() {
		const filter = this.#requirements.getFilter();

		return function (puzzles) {
			return puzzles.filter((puzzle) => filter.check(puzzle));
		};
	}

	async run() {
		return await new Flow(this.#dataset, new Stage(this.#getAction()))
			.setWriteStream(createWriteStream("./lab.csv"))
			.run();
	}
}
