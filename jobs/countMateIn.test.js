import { expect, test } from 'vitest'
import { mainDatasetHead, mainDatasetTail } from "../datasets.js";

import { countMateIn } from "./countMateIn.js";

test("counts mate in 1 correctly", async () => {
	const count = await countMateIn(mainDatasetHead, 1);
	expect(count).toBe(131);
});

test("counts mate in 2 correctly", async () => {
	const count = await countMateIn(mainDatasetHead, 2);
	expect(count).toBe(122);
});

test("counts mate in 3 correctly", async () => {
	const count = await countMateIn(mainDatasetHead, 3);
	expect(count).toBe(26);
});

test("counts mate in 4 correctly", async () => {
	const count = await countMateIn(mainDatasetHead, 4);
	expect(count).toBe(2);
});

test("counts mate in 5 correctly", async () => {
	const count = await countMateIn(mainDatasetTail, 5);
	expect(count).toBe(1);
});
