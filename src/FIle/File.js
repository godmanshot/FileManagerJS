export default class File {
	constructor(data) {
		this.data = data;
	}

	get name() {
		return this.data.name;
	}
}