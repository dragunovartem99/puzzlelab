import { expect, test } from "vitest";
import { mainDataset, mainDatasetHead, mainDatasetTail } from "../datasets.js";

import countAll from "./countAll.js";

const basicTests = [
	{ title: "head", dataset: mainDatasetHead, result: 999 },
	{ title: "tail", dataset: mainDatasetTail, result: 999 },
	// { title: "main", dataset: mainDataset, result: 4_557_000 },
];

basicTests.forEach((entry) => {
	const { title, dataset, result } = entry;

	test(title, async () => {
		expect(await countAll(dataset)).toBe(result);
	});
});
