import { mainDataset } from "./mainDataset.js";

import { Analysis } from "./objects/Analysis.js";
import { PuzzleCount } from "./objects/PuzzleCount.js";

new PuzzleCount({
	analysis: new Analysis(mainDataset),
	condition: (puzzle) => puzzle.Rating > 1500 }
).run().then(console.log);
