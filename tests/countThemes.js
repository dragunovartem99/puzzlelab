import { Flow } from "../objects/Flow.js";
import { Stage } from "../objects/Stage.js";
import { Requirements } from "../objects/Requirements.js";

export default async function (dataset, payload) {
	let count = 0;

	const filter = new Requirements(payload).getFilter();

	function action(puzzles) {
		return puzzles.filter((puzzle) => {
			filter.check(puzzle) && count++;
		});
	}

	await new Flow(dataset, new Stage(action)).run();

	return count;
}
