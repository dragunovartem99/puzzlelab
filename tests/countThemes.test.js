import { expect, test } from "vitest";
import { mainDatasetHead, mainDatasetTail } from "../datasets.js";
import countThemes from "./countThemes.js";

const basicTests = [
	{
		title: "no payload",
		dataset: mainDatasetTail,
		result: 0,
	},
	{
		title: "empty payload",
		dataset: mainDatasetHead,
		payload: {},
		result: 0,
	},
	{
		title: "empty themes string",
		dataset: mainDatasetTail,
		payload: { themes: "" },
		result: 0,
	},
	{
		title: "counts mate in 2",
		dataset: mainDatasetHead,
		payload: { themes: "mateIn2" },
		result: 122,
	},
	{
		title: "counts mate in 5",
		dataset: mainDatasetTail,
		payload: {
			themes: "mateIn5",
		},
		result: 1,
	},
	{
		title: "AND operator",
		dataset: mainDatasetHead,
		payload: {
			themes: "endgame,mateIn2",
		},
		result: 75,
	},
	{
		title: "OR operator",
		dataset: mainDatasetHead,
		payload: {
			themes: "endgame,mateIn2",
			themesOperator: "OR",
		},
		result: 532,
	},
];

basicTests.forEach((entry) => {
	const { title, dataset, payload, result } = entry;

	test(title, async () => {
		expect(await countThemes(dataset, payload)).toBe(result);
	});
});
