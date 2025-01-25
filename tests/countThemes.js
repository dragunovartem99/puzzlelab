import { AnalysisFiltered } from "../objects/AnalysisFiltered.js";
import { Action } from "../objects/Action.js";
import { Filter } from "../objects/Filter.js";

export default async function (dataset, { themes, operator = "AND" } = {}) {
	let count = 0;

	const action = new Action(() => count++);

	const filter = new Filter((puzzle) => {
		if (!themes?.length) return;

		const method = { AND: "every", OR: "some" }[operator];

		return themes[method]((theme) => puzzle.includes(theme));
	});

	await new AnalysisFiltered(dataset).addAction(action).addFilter(filter).run();

	return count;
}
