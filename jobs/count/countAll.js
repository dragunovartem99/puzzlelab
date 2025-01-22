import { Analysis } from "../../objects/analysis/Analysis.js";
import { AnalysisCount } from "../../objects/analysis/AnalysisCount.js";

export default function(dataset) {
	return new AnalysisCount(new Analysis(dataset)).addFilter(() => true);
}
