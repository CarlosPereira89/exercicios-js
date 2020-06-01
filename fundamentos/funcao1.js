//Funções sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(5, 3);

function imprimeNome(nome) {
    console.log(nome);
}

imprimeNome("Carlos");

//Funções com retorno
function soma(a, b = 1) {
    return a + b;
}

console.log(soma(2, 3));
console.log(soma(2));
console.log(soma());