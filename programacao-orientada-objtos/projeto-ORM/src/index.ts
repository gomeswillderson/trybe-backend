// criar sofware p/ um banco
// Deve ser possivel clientes criarem contas com valor depositado inicialmente
// realizar debito na conta, contanto que a pessoa possua saldo suficiente



import Conta from "./Conta";

function debitarConta(conta: Conta, value: number) {
    try {
        conta.debitar(value)
    } catch (err) {
        console.log(`Saldo ${conta.saldo} insuficiente para a compra de ${value}`);

    }
}

const contaDoWill = new Conta(1000);
const contaDoAmigoDoWill = new Conta(2000);

debitarConta(contaDoWill, 500);
debitarConta(contaDoAmigoDoWill, 99999);



// contaDoWill.debitar(50000);

console.log(contaDoWill.getSaldo());  // tradicional
console.log(contaDoAmigoDoWill.saldo);

// console.log(contaDoWill.saldo);       // TS

// contaDoWill.setSaldo(1000);  // tradicional
// contaDoWill.saldo = 2000;    // TS

