// Q1: 型をエラーの内容に修正せよ

module Q1 {

	interface Status {
		level: number;
		maxHP: number;
		maxMP: number;
		[attr: ]: number;
	}

	const myStatus: Status = {
		level: 99,
		defense: 999,
		maxHP: 999,
		maxMP: 999,
	};

	console.log(myStatus);

	/* 実行結果
	Hi Jun
	*/
}