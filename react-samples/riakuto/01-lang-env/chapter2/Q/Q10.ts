// Q10: ショートサーキット評価を用いて期待する出力を求めよ

module Q10 {
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
        const user =  { name: '(Somebody)', address: {} };
        const town =  ?? '(Somewhere)';
        console.log(`${user.name} lives in ${town}`);
    }

    /* 期待する出力：
    Patty Rabbit lives in Maple Town
    Rolley Cocker lives in (Somewhere)
    (Somebody) lives in (Somewhere)
    */
}