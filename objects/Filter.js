export class Filter {
	#validation;

	constructor(validation) {
		this.#validation = validation;
	}

	check(puzzle) {
		return this.#validation(puzzle);
	}
}
