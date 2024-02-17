// Q3: 型をエラーの内容に修正せよ

import { Console } from "console";

module Q3 {

	const permissions = {
		r: 0b100 as const,
		w: 0b010 as const,
		x: 0b001 as const,
	};

	type PermsChar = XX typeof permissions;
	type PermNum = typeof permissions[PermsChar];

	const permc: PermsChar = 'r';
	const permn: PermNum = 4;
	console.log(permc, permn)

	/* 実行結果
	r 4
	*/
}