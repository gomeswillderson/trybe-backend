function doMath(a, b, c) {
    return new Promise((resolve, reject) => {});
  }
  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
    return reject(new Error('Informe apenas números')); 
  }
  const result = (a + b) * c;

  if (result < 50) {
    return reject(new Error('Valor muito baixo'));
  }

  resolve(result);

  doMath(10, 10, 10)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error.message));

doMath(1, 1, 'a')
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error.message));

doMath(1, 1, 1)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error.message));