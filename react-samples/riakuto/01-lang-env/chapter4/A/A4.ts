// Q4: エラーが出ないようにせよ

module Q4 {

	type User = { id: unknown };
	type NewUser = User & { id: string };
	type OldUser = User & { id: number };
	type Book = { isbn: string };

	type IdOf<T> = T extends User ? T['id'] : never;

	type NewUserId = IdOf<NewUser>;
	type OldUserId = IdOf<OldUser>;
	type BookId = IdOf<Book>;

	const newuserid: NewUserId = '3';
	console.log(newuserid);

	const olduserid: OldUserId = 3;
	console.log(olduserid);

	/* 実行結果
	3
	3
	*/
}