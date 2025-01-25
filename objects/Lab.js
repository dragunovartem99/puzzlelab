import { AnalysisFiltered } from "./AnalysisFiltered.js";

export class Lab {
	#dataset;
	#requirements;
	#instruction;

	constructor(dataset, requirements, instruction) {
		this.#dataset = dataset;
		this.#requirements = requirements;
		this.#instruction = instruction;
	}

	async run() {
		return await new AnalysisFiltered(this.#dataset)
			.addInstruction(this.#instruction)
			.addFilter(this.#requirements.getFilter())
			.run();
	}
}
