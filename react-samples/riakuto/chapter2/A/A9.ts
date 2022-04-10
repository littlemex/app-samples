// Q9: 期待する出力はどういう結果となるか

import lodash from 'lodash'

module A9 {
    let patty = {
        name: 'Patty Rabbit',
        email: 'patty@maple.town',
        address: { town: 'Maple Town' },
        hobby: undefined,
    };

    let copy = lodash.cloneDeep(patty);

    patty.email = "patty+1@maple.town";
    patty.address.town = "Hoge Town";

    console.log(patty);
    console.log(copy);

    /* 期待する出力：
    {
        name: 'Patty Rabbit',
        email: 'patty+1@maple.town',
        address: { town: 'Hoge Town' },
        hobby: undefined
    }
    {
        name: 'Patty Rabbit',
        email: 'patty@maple.town',
        address: { town: 'Maple Town' },
        hobby: undefined
    }
    */
}