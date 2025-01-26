import { mainDataset } from "./datasets.js";

import { Lab } from "./objects/Lab.js";
import { Requirements } from "./objects/Requirements.js";

// TODO: #3 Implement main API
// Client picks .csv dataset (lichess) and requirements
// Application serves the client with "lab" (analysis):
// - Statistics (bound to rating)
// - List of puzzles found
// This lab can be rendered on a frontend (digarams / list)
async function createLab(dataset, payload) {
	const lab = new Lab(dataset, new Requirements(payload));
	await lab.run();
}

createLab(mainDataset, {
	goal: "count",
	themes: "mateIn5",
	sortType: "hardest",
	rating: undefined,
}).then(console.log);

function exportLab() {
	// P.S. Client can export lab in .csv or .json
}
