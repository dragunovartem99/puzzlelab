import { Analysis } from "../../objects/analysis/Analysis.js";
import { AnalysisCount } from "../../objects/analysis/AnalysisCount.js";

export default function countMateIn(dataset, { movesNumber }) {
	const isValid = [1, 2, 3, 4, 5].includes(movesNumber);

	if (!isValid) {
		throw new TypeError("Unexistent theme");
	}

	function filter(puzzle) {
		const theme = "mateIn" + movesNumber;
		return puzzle.Themes.includes(theme);
	}

	return new AnalysisCount(
		new Analysis(dataset)
	).addFilter(filter);
}
