// Q11: 期待する出力となるようにコードを書け

module Q11 {
    const foo = {
        name: 'Foo Object',
        dump() {
            console.log();
        }
    }

    foo.dump();

    /* 期待する出力：
    { name: 'Foo Object', dump: [Function: dump] }
    */
}