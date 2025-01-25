import { createWriteStream } from "node:fs";

import { mainDatasetHead } from "./datasets.js";
import { Flow } from "./objects/Flow.js";
import { Stage } from "./objects/Stage.js";

new Flow(mainDatasetHead, createWriteStream("./hey.csv"), new Stage()).run();
