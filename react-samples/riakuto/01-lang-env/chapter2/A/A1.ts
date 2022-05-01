// Q1: const keyをobj1のキーとして設定するにはどうすれば良いか

module A1 {
	const key = 'bar';
	const baz = 65536;
	const obj1 = { 
		foo: 256, 
		baz: baz,
		[key]: 4096,
	 };
	 console.log(obj1);
	
	/* 実行結果
	  { foo: 256, baz: 65536, bar: 4096 }
	*/
}