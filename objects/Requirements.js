import { Filter } from "./Filter.js";

export class Requirements {
	#themes;
	#themesOperator;

	constructor({ themes, themesOperator = "AND" } = {}) {
		this.#themes = themes;
		this.#themesOperator = themesOperator;
	}

	getFilter() {
		const themes = this.#themes && this.#themes.split(",");

		return new Filter((puzzle) => {
			if (!themes?.length) return false;

			const method = { AND: "every", OR: "some" }[this.#themesOperator];

			return themes[method]((theme) => puzzle.includes(theme));
		});
	}
}
