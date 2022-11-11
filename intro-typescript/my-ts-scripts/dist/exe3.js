"use strict";
const unitsMass = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];
function convertMass(value, fromUnit, toUnit) {
    const fromIndex = unitsMass.indexOf(fromUnit); // pegamos o index da unidade base no array
    const toIndex = unitsMass.indexOf(toUnit); // pegamos o index da unidade para a conversão
    const exponent = (toIndex - fromIndex); // calculamos o expoente a partir da diferença dos index
    return value * Math.pow(10, exponent);
}
console.log(convertMass(10, 'hm', 'cm'));
