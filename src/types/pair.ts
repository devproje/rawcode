export class Pair<F, S> {
	readonly first: F
	readonly second: S

	constructor(first: F, second: S) {
		this.first = first;
		this.second = second;
	}
}
