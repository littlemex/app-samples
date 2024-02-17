// Q3: 分割代入を使って期待される出力を得よ

module A3 {
	const obj3 = { name3: 'kanae', age: 24 };
	const { name3, age } = obj3;
	console.log(name3, age);
	
	// 期待する出力： Kanae 24
}