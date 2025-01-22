import { Analysis } from "../objects/Analysis.js";

export default async function countThemes(dataset, { themes, operator = "AND" } = {}) {
	let count = 0;

	function filter(puzzle) {
		if (!themes || !themes.length) {
			return;
		}

		const method = { AND: "every", OR: "some" }[operator];
		return themes[method]((theme) => puzzle.Themes.includes(theme));
	}

	await new Analysis(dataset)
		.addAction(() => count++)
		.addFilter(filter)
		.run();

	return count;
}
