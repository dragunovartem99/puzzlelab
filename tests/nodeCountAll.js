import { NodeAnalysis } from "../objects/NodeAnalysis.js";
import { Action } from "../objects/Action.js";

export default async function (dataset) {
	let count = 0;

	const action = new Action(() => count++);

	await new NodeAnalysis(dataset).addAction(action).run();

	return count;
}
