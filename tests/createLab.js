import { Lab } from "../objects/Lab.js";
import { Requirements } from "../objects/Requrements.js";
import { Instruction } from "../objects/Instruction.js";

export default async function (dataset, payload) {
	let count = 0;

	const instruction = new Instruction(() => count++);
	const requirements = new Requirements(payload);

	await new Lab(dataset, requirements, instruction).run();

	return count;
}
