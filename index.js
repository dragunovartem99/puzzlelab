import { mainDataset } from "./datasets.js";
import { Analysis } from "./objects/Analysis.js";
import { Lab } from "./objects/Lab.js";

// TODO: #1 Implement main API
// Client picks .csv dataset (lichess) and desired job
// Application serves the client with "lab" (analysis):
// - Statistics (bound to rating)
// - List of puzzles found
// This lab can be rendered on a frontend (digarams / list)
async function createLab(dataset, payload) {
	const { theme, rating, sortType } = payload;
	new Lab(new Analysis(dataset)).run();
}

createLab(mainDataset, {
	theme: "mateIn1",
	sortType: "hardest",
	rating: undefined,
});

function exportLab() {
	// P.S. Client can export lab in .csv or .json
}
