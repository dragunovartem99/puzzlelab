import { expect, test } from 'vitest'
import { mainDatasetHead, mainDatasetTail } from "../datasets.js";

import { countAll } from "./countAll.js";

test("counts head puzzles", async () => {
	const count = await countAll(mainDatasetHead);
	expect(count).toBe(999);
});

test("counts tail puzzles", async () => {
	const count = await countAll(mainDatasetTail);
	expect(count).toBe(999);
});
