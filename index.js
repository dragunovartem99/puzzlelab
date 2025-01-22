import { Lab } from "./objects/Lab.js";

// TODO: #1 Implement main API
// Client picks .csv dataset (lichess) and desired job
// Application serves the client with "lab" (analysis):
// - Statistics (bound to rating)
// - List of puzzles found
// This lab can be rendered on a frontend (digarams / list)

const dict = {
	countAll: "./jobs/count/countAll.js"
};

async function importJob(jobName) {
	return await import(dict[jobName]).default;
}

async function createLab({ jobName, options }) {
	const job = await importJob(jobName);
	new Lab(job, options).run();
}

createLab({ jobName: "countAll", options: {} });

function exportLab() {
	// P.S. Client can export lab in .csv or .json
}
