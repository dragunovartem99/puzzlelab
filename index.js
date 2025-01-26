import { mainDataset } from "./datasets.js";

// TODO: #9 Implement main API
class PuzzleLab {}

new PuzzleLab(mainDataset, {
	goal: "count",
	themes: "mateIn5",
	sortType: "hardest",
	rating: undefined,
}).run?.().export?.();
