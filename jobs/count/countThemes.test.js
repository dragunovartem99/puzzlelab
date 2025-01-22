import { expect, test } from 'vitest'
import { mainDatasetHead, mainDatasetTail } from "../../datasets.js";

import countThemes from "./countThemes.js";

const basicTests = [
	{
		name: "returns 0 for empty array",
		dataset: mainDatasetHead,
		filter: {
			themes: [],
		},
		expectedCount: 0
	},
	{
		name: "returns 0 if no themes",
		dataset: mainDatasetHead,
		expectedCount: 0
	},
	{
		name: "counts mate in 2",
		dataset: mainDatasetHead,
		filter: {
			themes: [ "mateIn2" ],
		},
		expectedCount: 122,
	},
	{
		name: "counts mate in 5",
		dataset: mainDatasetTail,
		filter: {
			themes: [ "mateIn5" ],
		},
		expectedCount: 1,
	}
]

basicTests.forEach((entry) => {
	const { name, dataset, filter, expectedCount } = entry;

	test(name, async () => {
		const count = await countThemes(dataset, filter).run();
		expect(count).toBe(expectedCount);
	})
});
