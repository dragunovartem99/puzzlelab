import { Analysis } from "./Analysis.js";

export class AnalysisFiltered extends Analysis {
	#filters = [];

	constructor(dataset) {
		super(dataset);
	}

	addFilter(filter) {
		this.#filters.push(filter);
		return this;
	}

	_analyze(puzzle) {
		if (this.#filters.some((filter) => !filter.check(puzzle))) {
			return;
		}

		this._instructions.forEach((instruction) => instruction.perform(puzzle));
	}
}
