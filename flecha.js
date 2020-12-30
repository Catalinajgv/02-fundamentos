// function sumar(a, b) {
//     return a + b;
// }
// let sumar = (a, b) => a + b

// console.log(sumar(10, 20));

// let saludar = () => 'Hola Mundo';

// console.log(saludar());



let deadpool = {
    n: 'wade',
    ap: 'winston',
    p: 'regeneración',
    getn() {
        return `${this.n} ${this.ap} -poder ${this.p}`
    }
};

console.log(deadpool.getn());