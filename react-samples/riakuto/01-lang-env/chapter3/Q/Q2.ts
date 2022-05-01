// Q2: Curry化せよ

module Q2 {
	// Pre-curried
	const multiply = (n: number, m: number) => n * m;
	console.log(multiply(3, 5));

	// Curried
	const withMultiple = (n: number) => XX => n * m;
	const triple = withMultiple(3);
	console.log(triple(5));

	/* 実行結果
	15
	15
	*/
}