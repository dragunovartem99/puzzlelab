import EventEmitter from "node:events";

export class Analysis extends EventEmitter {
	#filters = [];

	addFilter(filter) {
		this.#filters.push(filter);
		return this;
	}

	#getFilteredPuzzles(puzzles) {
		return puzzles.filter((puzzle) => this.#filters.every((filter) => filter.check(puzzle)));
	}

	do(puzzles) {
		const filteredPuzzles = this.#filters.length ? this.#getFilteredPuzzles(puzzles) : puzzles;

		filteredPuzzles.forEach((puzzle) => this.emit("puzzle", puzzle, filteredPuzzles));

		return filteredPuzzles;
	}
}
