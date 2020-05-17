const values = [7.2, 8.5, 6.8, 5.5];
console.log(values[0], values[3]);

console.log(values[4]); //Irá gerar "undefined"

values[4] = 9.6; 
console.log(values[4]);

console.log(values.length); //Mostra o tamanho de um array

//Apenas para fins didáticos, não é boa prática misturar tipos diferentes em um array
values.push({id: 5}, null, "Texto"); //Adiciona elementos em um array
console.log(values);
console.log(values.length);

//pop retira o último elemento de um array
console.log(values.pop());
console.log(values);

//outra forma de retirar valores de um array é usando "delete"
delete values[5];
console.log(values);

console.log(typeof values); //Irá retornar "object"