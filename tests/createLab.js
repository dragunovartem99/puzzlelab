import { Filter } from "../objects/Filter.js";
import { Instruction } from "../objects/Instruction.js";
import { Lab } from "../objects/Lab.js";

export default async function (dataset, payload) {
	const { goal, themes, themesOperator = "AND", rating, sortType } = payload;

	const allThemes = themes.split(",");

	let count = 0;

	const instruction = new Instruction(() => {
		count++;
	});

	const filter = new Filter((puzzle) => {
		if (!themes?.length) return false;

		const method = { AND: "every", OR: "some" }[themesOperator];

		return allThemes[method]((theme) => puzzle.includes(theme));
	});

	await new Lab(dataset, instruction, filter).run();

	return count;
}
