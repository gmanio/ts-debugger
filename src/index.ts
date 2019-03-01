function hello(constructorFn: Function) {
	console.log(constructorFn);
}

class Test {
	constructor() {
		console.log('works');
	}
	public name = () => console.log('work');
}

const oTest = new Test();

oTest.name();

