import { Analysis } from "../../objects/analysis/Analysis.js";
import { AnalysisCount } from "../../objects/analysis/AnalysisCount.js";

export default function(dataset) {
	let count = 0;

	new Analysis(dataset).addAction(() => count++);

	return count;
}
