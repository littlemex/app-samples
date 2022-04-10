// Q2: obj1のキーbazだけを抜き出したobjectを作りたい場合にどうすれば良いか

module A2 {
	const key = 'bar';
	const baz = 65536;
	const obj1 = { 
		foo: 256, 
		baz: baz,
	 };
	
	 // プロパティ名のショートハンド、と呼ばれる書き方
	 const obj2 = { baz };
	 console.log(obj2);
	 // { baz: 65536 } が出力されることが期待
}