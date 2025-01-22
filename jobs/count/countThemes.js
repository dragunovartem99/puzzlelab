import { Analysis } from "../../objects/analysis/Analysis.js";
import { AnalysisCount } from "../../objects/analysis/AnalysisCount.js";

export default function countThemes(dataset, { themes, operator = "AND" } = {}) {
	function filter(puzzle) {
		if (!themes || !themes.length) {
			return false;
		}

		const method = { AND: "every", OR: "some" }[operator];
		return themes[method]((theme) => puzzle.Themes.includes(theme));
	}

	return new AnalysisCount(new Analysis(dataset)).addFilter(filter);
}
