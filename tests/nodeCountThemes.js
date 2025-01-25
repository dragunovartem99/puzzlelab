import { Action } from "../objects/Action.js";
import { Filter } from "../objects/Filter.js";
import { FilteredAnalysis } from "../objects/FilteredAnalysis.js";

export default async function (dataset, filter) {
	let count = 0;

	const action = new Action(() => count++);

	const filter2 = new Filter((puzzle) => { 
		if (!filter?.themes?.length) return;

		const method = { AND: "every", OR: "some" }[filter.operator || "AND"];

		return (filter.themes[method]((theme) => puzzle.includes(theme)));
	});

	await new FilteredAnalysis(dataset).addAction(action).addFilter(filter2).run();

	return count;
}
