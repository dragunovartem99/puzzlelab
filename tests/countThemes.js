import { AnalysisFiltered } from "../objects/AnalysisFiltered.js";
import { Instruction } from "../objects/Instruction.js";
import { Filter } from "../objects/Filter.js";

export default async function (dataset, { themes, operator = "AND" } = {}) {
	let count = 0;

	const instruction = new Instruction(() => count++);

	const filter = new Filter((puzzle) => {
		if (!themes?.length) return false;

		const method = { AND: "every", OR: "some" }[operator];

		return themes[method]((theme) => puzzle.includes(theme));
	});

	await new AnalysisFiltered(dataset).addInstruction(instruction).addFilter(filter).run();

	return count;
}
