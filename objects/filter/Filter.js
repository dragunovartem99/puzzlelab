export class Filter {
	#filter;

	constructor(filter) {
		this.#filter = filter;
	}

	check(puzzle) {
		return this.#filter(puzzle) === true;
	}
}
