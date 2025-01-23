import { Analysis } from "../objects/Analysis.js";
import { Filter } from "../objects/Filter.js";
import { Action } from "../objects/Action.js";

export default async function countThemes(dataset, { themes, operator = "AND" } = {}) {
	let count = 0;

	const filter = new Filter((puzzle) => {
		if (!themes || !themes.length) {
			return;
		}

		const method = { AND: "every", OR: "some" }[operator];

		return themes[method]((theme) => puzzle.Themes.includes(theme));
	});

	const action = new Action(() => count++);

	await new Analysis(dataset)
		.addAction(action)
		.addFilter(filter)
		.run();

	return count;
}
