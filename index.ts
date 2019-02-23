console.log('test');

class Test {
	constructor() {
		console.log('works');
	}

	public name = () => console.log('work');
}

const oTest = new Test();

oTest.name();