import { expect, test } from "vitest";
import { mainDatasetHead, mainDatasetTail } from "../datasets.js";
import countThemes from "./countThemes.js";

const basicTests = [
	{
		name: "no payload",
		dataset: mainDatasetTail,
		result: 0,
	},
	{
		name: "empty payload",
		dataset: mainDatasetHead,
		payload: {},
		result: 0,
	},
	{
		name: "empty themes string",
		dataset: mainDatasetTail,
		payload: { themes: "" },
		result: 0,
	},
	{
		name: "counts mate in 2",
		dataset: mainDatasetHead,
		payload: { themes: "mateIn2" },
		result: 122,
	},
	{
		name: "counts mate in 5",
		dataset: mainDatasetTail,
		payload: {
			themes: "mateIn5",
		},
		result: 1,
	},
	{
		name: "AND operator",
		dataset: mainDatasetHead,
		payload: {
			themes: "endgame,mateIn2",
		},
		result: 75,
	},
	{
		name: "OR operator",
		dataset: mainDatasetHead,
		payload: {
			themes: "endgame,mateIn2",
			themesOperator: "OR",
		},
		result: 532,
	},
];

basicTests.forEach((entry) => {
	const { name, dataset, payload, result } = entry;

	test(name, async () => {
		expect(await countThemes(dataset, payload)).toBe(result);
	});
});
