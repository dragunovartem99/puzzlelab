import { Dataflow } from "./Dataflow";

export class Analysis {
	#dataset;
	#actions = new Set();
	#filters = [];

	constructor(dataset) {
		this.#dataset = dataset;
	}

	addAction(action) {
		this.#actions.add(action);
		return this;
	}

	addFilter(filter) {
		this.#filters.push(filter);
		return this;
	}

	#analyze(puzzle) {
		if (this.#filters.some((filter) => !filter.check(puzzle))) {
			return;
		}

		this.#actions.forEach((action) => action.perform(puzzle));
	}

	async run() {
		return await new Dataflow(this.#dataset, (puzzle) => this.#analyze(puzzle)).run();
	}
}
