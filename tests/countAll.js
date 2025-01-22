import { Analysis } from "../objects/Analysis.js";

export default async function (dataset) {
	let count = 0;

	await new Analysis(dataset).addAction(() => count++).run();

	return count;
}
