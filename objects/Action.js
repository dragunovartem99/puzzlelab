export class Action {
	#action;

	constructor(action) {
		this.#action = action;
	}

	perform(puzzle) {
		this.#action(puzzle);
		return this;
	}
}
