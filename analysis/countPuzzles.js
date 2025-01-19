import { Analysis } from "../objects/Analysis.js";

export function countPuzzles(dataset) {
	return new Promise((resolve) => {
		let puzzleCount = 0;

		new Analysis({
			dataset,
			onData: () => puzzleCount++,
			onEnd: () => resolve(puzzleCount)
		}).run();
	});
}
