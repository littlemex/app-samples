// Q3: カウンタを作れ

module A3 {
	const counter = (count = 0) => (adds = 1) => count += adds;
	const increment = counter()
	console.log(increment());
	console.log(increment(2));
	/* 実行結果
	1
	3
	*/
}