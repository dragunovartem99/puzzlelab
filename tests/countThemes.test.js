import { expect, test } from 'vitest'
import { mainDatasetHead, mainDatasetTail } from "../datasets.js";

import countThemes from "./countThemes.js";

const basicTests = [
	{ name: "no filter object", dataset: mainDatasetTail, expectedCount: 0 },
	{ name: "empty filter object", dataset: mainDatasetHead, filter: {}, expectedCount: 0 },
	{ name: "empty themes array", dataset: mainDatasetTail, filter: { themes: [] }, expectedCount: 0 },
	{
		name: "counts mate in 2",
		dataset: mainDatasetHead,
		filter: { themes: [ "mateIn2" ] },
		expectedCount: 122,
	},
	{
		name: "counts mate in 5",
		dataset: mainDatasetTail,
		filter: {
			themes: [ "mateIn5" ],
		},
		expectedCount: 1,
	},
	{
		name: "AND operator",
		dataset: mainDatasetHead,
		filter: {
			themes: [ "endgame", "mateIn2" ],
		},
		expectedCount: 75,
	},
	{
		name: "OR operator",
		dataset: mainDatasetHead,
		filter: {
			themes: [ "endgame", "mateIn2" ],
			operator: "OR",
		},
		expectedCount: 532,
	},
]

basicTests.forEach((entry) => {
	const { name, dataset, filter, expectedCount } = entry;

	test(name, async () => {
		expect(await countThemes(dataset, filter)).toBe(expectedCount);
	})
});
