import { Analysis } from "../objects/Analysis.js";

export async function countPuzzles(dataset) {
	let puzzleCount = 0;

	await new Analysis({ dataset, onPuzzle: () => puzzleCount++ }).run();

	return puzzleCount;
}
