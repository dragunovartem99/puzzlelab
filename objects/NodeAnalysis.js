import { PuzzleStream } from "./PuzzleStream.js";

export class NodeAnalysis {
	#dataset;
	_actions = new Set();

	constructor(dataset) {
		this.#dataset = dataset;
	}

	addAction(action) {
		this._actions.add(action);
		return this;
	}

	_analyze(puzzle) {
		this._actions.forEach((action) => action.perform(puzzle));
	}

	async run() {
		return await new PuzzleStream(this.#dataset, (puzzle) => this._analyze(puzzle)).run();
	}
}
