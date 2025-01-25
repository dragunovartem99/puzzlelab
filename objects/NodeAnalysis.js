import { PuzzleStream } from "./PuzzleStream.js";

export class NodeAnalysis {
	#dataset;
	#actions = new Set();

	constructor(dataset) {
		this.#dataset = dataset;
	}

	addAction(action) {
		this.#actions.add(action);
		return this;
	}

	#analyze(puzzle) {
		this.#actions.forEach((action) => action.perform(puzzle));
	}

	async run() {
		return await new PuzzleStream(this.#dataset, (puzzle) => this.#analyze(puzzle)).run();
	}
}
