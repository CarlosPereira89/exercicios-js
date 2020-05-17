//Maneira antiga de concatenção
const nome = 'Carlos';
const concatenacao = 'Olá ' + nome + '!';
console.log(concatenacao);

//Usando template string

const name = 'Danilo';
const template = `Olá ${name}, tudo bem?`;
console.log(template);

// Expressões
console.log(`1 + 1 = ${1 + 1}`);

//Usando uma função dentro de template string

const up = texto => texto.toUpperCase();
console.log(`Tome ${up('cuidado')}`);

