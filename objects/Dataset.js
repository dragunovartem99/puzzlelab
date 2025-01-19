import fs from "node:fs";

export class Dataset {
	#path;

	constructor(path) {
		this.#path = path;
	}

	stream() {
		return fs.createReadStream(this.#path);
	}
}
