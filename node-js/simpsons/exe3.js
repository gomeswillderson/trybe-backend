const fs = require('fs').promises;

async function filterSimpsons() {
    const fileContent = await fs.readFile('./simpsons.json', 'utf8');
    const simpsons = JSON.parse(fileContent);
    // console.log(simpsons);
    const newArray = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');
    await fs.writeFile('./simpsons.json', JSON.stringify(newArray));

}

filterSimpsons();