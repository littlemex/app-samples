// Q12: 期待する出力となるようにコードを書け

module Q12 {
    class Person {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
        greet = () => {
            const doIt = () => {
                console.log('Hi, I am', this.name)
            };
            doIt();
        }

        greet1() {
            const doIt = function (this: any) {
                console.log('Hi, I am', this.name);
            }
            doIt();
        }
    }

    const creamy = new Person('Mami');
    creamy.greet();
    creamy.greet1();

    /* 期待する出力：
    Hi, I am Mami
    Hi, I am Mami
    */
}