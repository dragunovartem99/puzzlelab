import { Flow } from "../objects/Flow.js";
import { Stage } from "../objects/Stage.js";
import { Analysis } from "../objects/Analysis.js";

export default async function (dataset) {
	let count = 0;

	const analysis = new Analysis();
	analysis.on("puzzles", (puzzles) => (count += puzzles.length));

	await new Flow(dataset, new Stage(analysis)).run();

	return count;
}
