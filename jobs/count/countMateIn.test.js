import { expect, test } from 'vitest'
import { mainDatasetHead, mainDatasetTail } from "../../datasets.js";

import countMateIn from "./countMateIn.js";

// TODO: #2 Add test for async functions throwing TypeErrors

const basicTests = [
	{ dataset: mainDatasetTail, movesNumber: 1, expectedCount: 112 },
	{ dataset: mainDatasetHead, movesNumber: 2, expectedCount: 122 },
	{ dataset: mainDatasetTail, movesNumber: 3, expectedCount: 34 },
	{ dataset: mainDatasetHead, movesNumber: 4, expectedCount: 2 },
	{ dataset: mainDatasetTail, movesNumber: 5, expectedCount: 1 },
]

basicTests.forEach(({ dataset, movesNumber, expectedCount }) => {
	test(`counts mate in ${movesNumber}`, async () => {
		const count = await countMateIn(dataset, { movesNumber }).run();
		expect(count).toBe(expectedCount);
	})
});
