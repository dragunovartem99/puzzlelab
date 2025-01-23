import { Analysis } from "../objects/Analysis.js";
import { Action } from "../objects/Action.js";

export default async function (dataset) {
	let count = 0;

	const action = new Action(() => count++);

	await new Analysis(dataset).addAction(action).run();

	return count;
}
