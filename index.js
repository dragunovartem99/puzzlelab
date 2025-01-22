import { mainDataset } from "./datasets.js";
import { Filter } from "./objects/Filter.js";
import { Lab } from "./objects/Lab.js";

// TODO: #1 Implement main API
// Client picks .csv dataset (lichess) and desired job
// Application serves the client with "lab" (analysis):
// - Statistics (bound to rating)
// - List of puzzles found
// This lab can be rendered on a frontend (digarams / list)

async function createLab(payload) {
	const { theme, rating, sortType } = payload;

	const lab = new Lab(mainDataset);
	const themeFilter = new Filter(theme);

}

createLab({
	theme: "mateIn1",
});

function exportLab() {
	// P.S. Client can export lab in .csv or .json
}
