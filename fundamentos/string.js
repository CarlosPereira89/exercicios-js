const texto = "Texto";

console.log(texto.charAt(4)); // Retorna um carctere a partir de um indice informado, se não for informado um indice, retornará o indice 0 por padrão
console.log(texto.charAt(5)); // Se informar um índice não existente, o JS não retornará nada
console.log(texto.charCodeAt(2));
console.log(texto.substring(2));
console.log(texto.substring(0, 3));

console.log("Qualquer ".concat(texto).concat('!'));
console.log(texto.replace('x', 'X')); 

console.log("Carlos, Alexia, Danilo".split(','));