// Q1: 型をエラーの内容に修正せよ

module A1 {

	interface Status {
		level: number;
		maxHP: number;
		maxMP: number;
		[attr: string]: number;
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