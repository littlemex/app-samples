// Q11: 期待する出力となるようにコードを書け

module A11 {
    const foo = {
        name: 'Foo Object',
        dump() {
            console.log(this);
        }
    }

    foo.dump();

    /* 期待する出力：
    { name: 'Foo Object', dump: [Function: dump] }
    */
}