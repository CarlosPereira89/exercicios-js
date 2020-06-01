// Armazenando uma função (anônima) em uma variável ou constante

const imprimirSoma = function (a, b) {
    console.log(a + b);
}

imprimirSoma(3, 2);

//Arrow function em uma variável

const soma = (a, b) => {
    return a + b;
}

console.log(soma(5, 5));

// Retorno implícito (sem usar a palavra-chave return)
const subtracao = (a, b) => a - b; //Tem apenas uma sentença de código
console.log(subtracao(10, 5));