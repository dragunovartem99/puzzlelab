import { expect, test } from "vitest";
import { mainDatasetHead, mainDatasetTail } from "../datasets.js";
import countThemes from "./countThemes.js";

const basicTests = [
	{
		title: "no filter object",
		dataset: mainDatasetTail,
		result: 0,
	},
	{
		title: "empty filter object",
		dataset: mainDatasetHead,
		filter: {},
		result: 0,
	},
	{
		title: "empty themes array",
		dataset: mainDatasetTail,
		filter: { themes: [] },
		result: 0,
	},
	{
		title: "counts mate in 2",
		dataset: mainDatasetHead,
		filter: { themes: ["mateIn2"] },
		result: 122,
	},
	{
		title: "counts mate in 5",
		dataset: mainDatasetTail,
		filter: {
			themes: ["mateIn5"],
		},
		result: 1,
	},
	{
		title: "AND operator",
		dataset: mainDatasetHead,
		filter: {
			themes: ["endgame", "mateIn2"],
		},
		result: 75,
	},
	{
		title: "OR operator",
		dataset: mainDatasetHead,
		filter: {
			themes: ["endgame", "mateIn2"],
			operator: "OR",
		},
		result: 532,
	},
];

basicTests.forEach((entry) => {
	const { title, dataset, filter, result } = entry;

	test(title, async () => {
		expect(await countThemes(dataset, filter)).toBe(result);
	});
});
