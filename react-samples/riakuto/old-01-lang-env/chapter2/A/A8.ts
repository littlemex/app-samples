// Q8: オブジェクトのコピーをせよ、元オブジェクトの値を変えてはならない

module A8 {
    const original = { a: 1, b: 2 };

    const copy = {...original};
    copy.a = 2;
    console.log(original, copy);

    /* 期待する出力：
       { a: 1, b: 2 } { a: 2, b: 2 }
    */
}