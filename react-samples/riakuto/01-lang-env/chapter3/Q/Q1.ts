// Q1: 実行結果となるようにコードを修正せよ

module Q1 {
	const greeter = (target: any) => () => console.log('Hi', target);
	const greet = greeter('Jun');
	greet

	/* 実行結果
	Hi Jun
	*/
}