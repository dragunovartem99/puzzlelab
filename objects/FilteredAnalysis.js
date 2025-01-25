import { NodeAnalysis } from "./NodeAnalysis";

export class FilteredAnalysis extends NodeAnalysis {
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

		this._actions.forEach((action) => action.perform(puzzle));
	}
}
