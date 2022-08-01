//Crie uma função que recebe três parâmetros retorna uma Promise.
// Copiar
// - Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo `"Informe apenas números"`.
// - Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro (`(a + b) * c`).
// - Caso o resultado seja menor que 50, rejeite a Promise com o motivo `"Valor muito baixo"`
// - Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.

function calcABC(a, b, c) {
  return new Promise((resolve, reject) => {

    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      return reject(new Error('Informe apenas números')); 
    }

    const result = (a + b) * c;

    if (result < 50) {
      return reject(new Error('Valor muito baixo'));
    }

    resolve(result);
  });
}

calcABC(6, 6, 6)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error.message));

calcABC('xablau', 1, 1)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error.message));

calcABC(1, 1, 1)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error.message));