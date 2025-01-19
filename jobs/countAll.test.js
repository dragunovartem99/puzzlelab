import { expect, test } from 'vitest'
import { countAll } from "./countAll";

import { mainDatasetHead, mainDatasetTail } from "../datasets.js";

test("counts head puzzles", async () => {
	const count = await countAll(mainDatasetHead);
	expect(count).toBe(999);
});

test("counts tail puzzles", async () => {
	const count = await countAll(mainDatasetTail);
	expect(count).toBe(999);
});
