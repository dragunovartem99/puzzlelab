export class Instruction {
	#instruction;

	constructor(instruction) {
		this.#instruction = instruction;
	}

	perform(puzzle) {
		this.#instruction(puzzle);
	}
}
