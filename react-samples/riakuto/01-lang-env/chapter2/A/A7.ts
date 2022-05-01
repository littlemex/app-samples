// Q7: 分割代入を使って期待される出力を得よ

module A7 {
    const user = {
        id: 1,
        userName: 'Maku',
        avatar: {
            id: 'avatar123',
            url: 'http://example.com/sample.png',
        },
    };

    const {
        userName,
        avatar: {
            id: avatarId = "avatar"
        }
    } = user;
    console.log(userName, avatarId);

    /* 期待する出力：
        Maku, avatar123
    */
}