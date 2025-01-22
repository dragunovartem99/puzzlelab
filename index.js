import { Lab } from "./objects/Lab.js";

// TODO: #1 Implement main API
// Client picks .csv dataset (lichess) and desired job
// Application serves the client with "lab" (analysis):
// - Statistics (bound to rating)
// - List of puzzles found
// This lab can be rendered on a frontend (digarams / list)
function createLab(dataset, { jobName, options }) {
	new Lab(jobName, options).run();
}

createLab(null, { jobName: "mateIn1", options: {} });


function exportLab() {
	// P.S. Client can export lab in .csv or .json
}
