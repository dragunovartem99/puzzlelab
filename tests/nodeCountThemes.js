import { NodeAnalysis } from "../objects/NodeAnalysis.js";
import { Action } from "../objects/Action.js";

export default async function (dataset, filter) {
	let count = 0;

	const action = new Action((puzzle) => {
		if (!filter?.themes?.length) return;
		
		const method = { AND: "every", OR: "some" }[filter.operator || "AND"];

		if (filter.themes[method]((theme) => puzzle.includes(theme))) {
			count++;
		}
	});

	await new NodeAnalysis(dataset).addAction(action).run();

	return count;
}
