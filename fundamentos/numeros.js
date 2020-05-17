const peso1 = 1.0;
const peso2 = Number('2.0'); //Number é uma função, não confundir com o tipo "number", essa função converteu uma string para o tipo "number"

console.log(typeof peso2);
console.log(peso1, peso2);
console.log(Number.isInteger(peso1), Number.isInteger(peso2));

const avaliacao1 = 9.53;
const avaliacao2 = 8.10;
const total = avaliacao1 * peso1 + avaliacao2 * peso2; // Atentar para a precedência dos operadores
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); //toFixed para as casas decimais
console.log(media.toString(2)); //Converte para números binários
console.log(typeof media);
console.log(typeof Number);
