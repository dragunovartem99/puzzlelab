import { expect, test } from 'vitest'
import { mainDatasetHead, mainDatasetTail } from "../../datasets.js";
import countAll from './countAll.js';

test("counts head puzzles", async () => {
	expect(await countAll(mainDatasetHead)).toBe(999);
});

test("counts tail puzzles", async () => {
	expect(await countAll(mainDatasetTail)).toBe(999);
});
