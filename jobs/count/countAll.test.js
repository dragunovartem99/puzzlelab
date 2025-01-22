import { expect, test } from 'vitest'
import { mainDatasetHead, mainDatasetTail } from "../../datasets.js";

import { Analysis } from '../../objects/analysis/Analysis.js';

test("counts head puzzles", async () => {
	let count = 0;

	await new Analysis(mainDatasetHead)
		.addAction(() => count++)
		.run();

	expect(count).toBe(999);
});

test("counts tail puzzles", async () => {
	let count = 0;

	await new Analysis(mainDatasetTail)
		.addAction(() => count++)
		.run();

	expect(count).toBe(999);
});
