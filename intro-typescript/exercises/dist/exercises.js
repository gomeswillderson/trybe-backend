"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trapeze = exports.rhombus = exports.rectangle = exports.square = exports.triangle = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
function greeter(name) {
    return `Olá ${name}!`;
}
exports.greeter = greeter;
function personAge(name, age) {
    return `${name} tem ${age} anos!`;
}
exports.personAge = personAge;
function add(x, y) {
    return x + y;
}
exports.add = add;
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
function triangle(base, height) {
    return (base * height) / 2;
}
exports.triangle = triangle;
function square(side) {
    return side ** 2;
}
exports.square = square;
function rectangle(base, height) {
    return base * height;
}
exports.rectangle = rectangle;
// Crie uma nova função para calcular a área de um losango:
// A área do losango é dada pelo resultado da multiplicação
// da diagonal maior (D) pela diagonal menor (d) dividido por dois. 
function rhombus(D, d) {
    return (D * d) / 2;
}
exports.rhombus = rhombus;
// Crie uma nova função para calcular a área de um trapézio.
// A área do trapézio é dada pelo produto da altura (h) com 
// a soma da base maior (B) e a base menor (b) dividido por dois. 
function trapeze(B, b, h) {
    return ((B + b) * h) / 2;
}
exports.trapeze = trapeze;
