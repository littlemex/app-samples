// Q2: 型をエラーの内容に修正せよ

module A2 {

	type Fig = 'one' | 'two' | 'three';
	type FigMap = { [k in Fig]?: number };

	const figMap: FigMap = {
		one: 1,
		two: 2,
		three: 3,
	}

	console.log(figMap);

	/* 実行結果
	{ one: 1, two: 2, three: 3 }
	*/
}