import { Flow } from "../objects/Flow.js";
import { Stage } from "../objects/Stage.js";

export default async function (dataset) {
	let count = 0;

	function action(puzzles) {
		count += puzzles.length;
		return puzzles;
	}

	await new Flow(dataset, new Stage(action)).run();

	return count;
}
