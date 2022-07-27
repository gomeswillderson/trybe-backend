const readline = require('readline-sync');
const IMC = require('./imc');

const peso = readline.questionFloat('Qual é o seu peso?');
console.log(peso);

const altura = readline.questionFloat('Qual é sua altura?');
console.log(altura);

const resultado = IMC(peso, altura);
console.log(resultado);

switch (true) {

    case resultado < 18.5:
        console.log("abaixo do peso");
        break;
    case resultado >= 18.5 && resultado < 25:
        console.log("peso normal");
        break;
    case resultado >= 25 && resultado < 30:
        console.log("sobrepeso");
        break;
    case resultado >= 30 && resultado < 35:
        console.log("obsidade grau 1");
        break;
    case resultado >= 35 && resultado < 40:
        console.log("sobrepeso");
        break;        
        
    default:
        console.log("Erro");
}

