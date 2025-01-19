import { Analysis } from "../objects/Analysis.js";
import { AnalysisCount } from "../objects/AnalysisCount.js";

export async function countAll(dataset) {
	const result = await new AnalysisCount(
		new Analysis(dataset)
	).addFilter(() => true).run();

	return result;
}
