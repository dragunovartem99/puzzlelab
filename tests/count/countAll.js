import { Analysis } from "../../objects/analysis/Analysis.js";

export default async function(dataset) {
	let count = 0;

	await new Analysis(dataset)
		.addAction(() => count++)
		.run();

	return count;
}
