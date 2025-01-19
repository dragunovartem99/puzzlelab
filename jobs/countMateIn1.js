import { mainDataset } from "../mainDataset.js";

import { Analysis } from "../objects/Analysis.js";
import { AnalysisCount } from "../objects/AnalysisCount.js";

new AnalysisCount(
	new Analysis(mainDataset)
)
	.addFilter(({ Themes }) => Themes.includes("mateIn1"))
	.run()
	.then(console.log);
