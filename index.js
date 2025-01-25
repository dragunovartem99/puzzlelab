import { mainDataset } from "./datasets.js";
import createLab from "./tests/createLab.js";

// TODO: #1 Implement main API
// Client picks .csv dataset (lichess) and desired goal
// Application serves the client with "lab" (analysis):
// - Statistics (bound to rating)
// - List of puzzles found
// This lab can be rendered on a frontend (digarams / list)
createLab(mainDataset, {
	goal: "count",
	themes: "mateIn1",
	sortType: "hardest",
	rating: undefined,
}).then(console.log);

function exportLab() {
	// P.S. Client can export lab in .csv or .json
}
