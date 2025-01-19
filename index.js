import { mainDataset } from "./mainDataset.js";
import { countPuzzles } from "./analysis/countPuzzles.js";

countPuzzles(mainDataset).then(console.log);
