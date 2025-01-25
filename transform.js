import { createWriteStream } from "node:fs";

import { mainDatasetHead } from "./datasets.js";
import { Flow } from "./objects/Flow.js";
import { Stage } from "./objects/Stage.js";

let count = 0;

function performance(puzzles) {
	count += puzzles.length;
	return puzzles;
}

await new Flow(mainDatasetHead, createWriteStream("./hey.csv"), new Stage(performance)).run();

console.log(count);
