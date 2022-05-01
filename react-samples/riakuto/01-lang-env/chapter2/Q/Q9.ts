// Q9: 期待する出力はどういう結果となるか

import lodash from 'lodash'

module Q9 {
    let patty = {
        name: 'Patty Rabbit',
        email: 'patty@maple.town',
        address: { town: 'Maple Town' },
        hobby: undefined,
    };

    let copy = lodash.cloneDeep(patty);
    // 発展： let copy = {...patty}; だとどういう結果になるか？

    patty.email = "patty+1@maple.town";
    patty.address.town = "Hoge Town";

    console.log(patty);
    console.log(copy);

    /* 期待する出力：
    {
        name: 'Patty Rabbit',
        email: 'XXXX@maple.town',
        address: { town: XXXX },
        hobby: undefined
    }
    {
        name: 'Patty Rabbit',
        email: 'XXXX@maple.town',
        address: { town: XXXX },
        hobby: undefined
    }
    */
}