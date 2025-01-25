import { Flow } from "../objects/Flow.js";
import { Stage } from "../objects/Stage.js";

export default async function (dataset) {
	let count = 0;

	function performance(puzzles) {
		count += puzzles.length;
		return puzzles;
	}

	await new Flow(dataset, new Stage(performance)).run();

	return count;
}
