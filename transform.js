import { createWriteStream } from "node:fs";

import { mainDatasetHead } from "./datasets.js";
import { Flow } from "./objects/Flow.js";
import { Transformer } from "./objects/Transformer.js";

new Flow(mainDatasetHead, new Transformer(), createWriteStream("./hey.csv")).run();
