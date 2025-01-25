import { Analysis } from "../objects/Analysis.js";
import { Instruction } from "../objects/Instruction.js";

export default async function (dataset) {
	let count = 0;

	const instruction = new Instruction(() => count++);

	await new Analysis(dataset).addInstruction(instruction).run();

	return count;
}
