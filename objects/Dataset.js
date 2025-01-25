import { createReadStream } from "node:fs";

export class Dataset {
	#path;

	constructor(path) {
		this.#path = path;
	}

	read() {
		return createReadStream(this.#path);
	}
}
