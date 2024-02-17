// Q1: const keyをobj1のキーとして設定するにはどうすれば良いか

module Q1 {
	const key = 'bar';
	const baz = 65536;
	const obj1 = { 
		foo: 256, 
		baz: baz,
		// bar: 4096を入れたい
	 };
	 console.log(obj1);
}