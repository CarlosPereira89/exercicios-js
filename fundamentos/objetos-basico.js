const prod1 = {}; //Criando um objeto literal vazio
prod1.nome = "Notebook"; //adicionando atributos ao objeto de forma dinâmica
prod1.preco = 1350.45;
prod1['Desconto produto'] = 0.40; //Evitar nomear atributos com espaço

console.log(prod1);

// criar atributos dentro do próprio objeto
const prod2 = {
    nome: "Celular",
    preco: 1250.25
};

console.log(prod2);
console.log(prod2.nome);

const template = `Produtos a venda: ${prod1.nome}, ${prod2.nome}.`;
console.log(template);