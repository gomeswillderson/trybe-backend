// Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.

const fs = require('fs').promises;
// O método fornecido pelo módulo fs para leitura assíncrona de arquivos é o fs.readFile.
// Esse método possui diferentes formas de retornar a leitura de um arquivo.
// Neste caso, optei por utilizar o retorno de uma Promise que deve deixar o código mais legível.

async function leituraDoObj() {
    const objLido = await fs.readFile('./simpsons.json', 'utf8'); // leitura do obj.
    const objEmFormaDeArray = JSON.parse(objLido); // convertendo o objLido em um array para manipula-lo com HOF.
    const objMapeado = objEmFormaDeArray.map(({ id, name }) => `${id} - ${name}`);
    objMapeado.forEach((item) => console.log(item));
}

leituraDoObj();
