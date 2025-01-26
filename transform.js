import { mainDataset } from "./datasets.js";
import { Flow } from "./objects/Flow.js";
import { Stage } from "./objects/Stage.js";

let count = 0;

function action(puzzles) {
	count += puzzles.length;
	return puzzles;
}

await new Flow(mainDataset, new Stage(action)).run();

console.log(count);
