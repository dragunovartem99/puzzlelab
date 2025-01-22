import { expect, test } from 'vitest'
import { mainDatasetHead, mainDatasetTail } from "../../datasets.js";

import countThemes from "./countThemes.js";

const basicTests = [
	{
		name: "returns 0 for empty array",
		dataset: mainDatasetHead,
		themes: [],
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
		themes: [ "mateIn2" ],
		expectedCount: 122,
	},
	{
		name: "counts mate in 5",
		dataset: mainDatasetTail,
		themes: [ "mateIn5" ],
		expectedCount: 1,
	}
]

basicTests.forEach(({ name, dataset, themes, expectedCount }) => {
	test(name, async () => {
		const count = await countThemes(dataset, themes).run();
		expect(count).toBe(expectedCount);
	})
});
