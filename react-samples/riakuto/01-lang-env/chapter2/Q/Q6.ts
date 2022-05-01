// Q6: 分割代入とmapを使って期待される出力を得よ

module Q6 {
    const response = {
        data: [
            {
                id: 1,
                name: 'Patty Rabbit',
                email: 'patty@maple.town',
            },
            {
                id: 2,
                name: 'Rolley Cocker',
                email: 'rolley@palm.town',
            },
            {
                id: 3,
                name: 'Bobby Bear',
                email: 'bobby@maple.town',
            },
        ],
    };
    
    let {
        data: users,
    } = response;
    let ids = ;
    console.log(ids);

    /* 期待する出力：
        [ 1, 2, 3 ]
    */
}