import { Analysis } from "../objects/Analysis.js";
import { AnalysisCount } from "../objects/AnalysisCount.js";

export async function countMateIn(dataset, movesNumber) {
	const isValid = [1, 2, 3, 4, 5].includes(movesNumber);

	if (!isValid) {
		throw new TypeError("Unexistent theme");
	}

	const theme = "mateIn" + movesNumber;

	const result = await new AnalysisCount(
		new Analysis(dataset)
	).addFilter(({ Themes }) => Themes.includes(theme)).run();

	return result;
}
