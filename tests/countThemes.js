import { Flow } from "../objects/Flow.js";
import { Stage } from "../objects/Stage.js";
import { Analysis } from "../objects/Analysis.js";
import { Requirements } from "../objects/Requirements.js";

export default async function (dataset, payload) {
	let count = 0;

	const analysis = new Analysis().addFilter(new Requirements(payload).getFilter());
	analysis.on("puzzle", () => count++);

	await new Flow(dataset, new Stage(analysis)).run();

	return count;
}
