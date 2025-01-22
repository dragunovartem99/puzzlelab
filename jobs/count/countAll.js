import { Analysis } from "../../objects/analysis/Analysis.js";
import { AnalysisCount } from "../../objects/analysis/AnalysisCount.js";

export async function countAll(dataset) {
	const result = await new AnalysisCount(
		new Analysis(dataset)
	).addFilter(() => true).run();

	return result;
}
