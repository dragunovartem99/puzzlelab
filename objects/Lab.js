import { AnalysisFiltered } from "./AnalysisFiltered.js";

export class Lab {
	#dataset;
	#instruction;
	#filter;

	constructor(dataset, instruction, filter) {
		this.#dataset = dataset;
		this.#instruction = instruction;
		this.#filter = filter;
	}

	async run() {
		return await new AnalysisFiltered(this.#dataset)
			.addInstruction(this.#instruction)
			.addFilter(this.#filter)
			.run();
	}
}
