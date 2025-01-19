import { mainDataset } from "../mainDataset.js";

import { Analysis } from "../objects/Analysis.js";
import { AnalysisCount } from "../objects/AnalysisCount.js";

new AnalysisCount(new Analysis(mainDataset))
	.addCondition(() => true)
	.run()
	.then(console.log);
