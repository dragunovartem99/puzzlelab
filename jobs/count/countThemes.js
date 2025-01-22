import { Analysis } from "../../objects/analysis/Analysis.js";
import { AnalysisCount } from "../../objects/analysis/AnalysisCount.js";

export default function countThemes(dataset, themes) {
	function filter(puzzle) {
		if (!themes || !themes.length) {
			return false;
		}

		return themes.some((theme) => puzzle.Themes.includes(theme));
	}

	return new AnalysisCount(new Analysis(dataset)).addFilter(filter);
}
