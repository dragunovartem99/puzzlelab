import { PuzzleStream } from "./PuzzleStream.js";

export class Analysis {
	#dataset;
	_instructions = new Set();

	constructor(dataset) {
		this.#dataset = dataset;
	}

	addInstruction(action) {
		this._instructions.add(action);
		return this;
	}

	_analyze(puzzle) {
		this._instructions.forEach((instruction) => instruction.perform(puzzle));
	}

	async run() {
		return await new PuzzleStream(this.#dataset, (puzzle) => this._analyze(puzzle)).run();
	}
}
