var v = [1, 4, 7, 1, 2, 1, 4, 25, 3, 7];

let resultado = v.reduce((acumulador, item) => acumulador += item, 0);
console.log(`Esse é o resultado: ${resultado} Essa é a média do resultado: ${resultado / 10}`);
