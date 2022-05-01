// Q10:  Nullish Coalescing, Optional Chainingを用いて期待する結果を求めよ

module A10 {
    const users = [
        {
            name: 'Patty Rabbit',
            address: {town: 'Maple Town',},
        },
        {
            name: 'Rolley Cocker',
            address: {},
        },
        null,
    ];

    for (const u of users) {
        const user = u ?? { name: '(Somebody)', address: {} };
        const town = user?.address?.town ?? '(Somewhere)';
        console.log(`${user.name} lives in ${town}`);
    }

    /* 期待する出力：
    Patty Rabbit lives in Maple Town
    Rolley Cocker lives in (Somewhere)
    (Somebody) lives in (Somewhere)
    */
}