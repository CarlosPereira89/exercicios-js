/*O recomendado é sempre declarar uma váriavel com "let"
* "var" possui comportamentos que podem causar "confusão"
*/
var x = 10;
let y = 25;

console.log(x, y);

var x = 25; //Usando "var" podemos redeclarar a variável, o que pode causar "problemas" na aplicação

y = 50; // Já usando "let", para atribuir um novo valor a uma váriavel, não pode usar novamente a palavra-chave "let"

console.log(x, y);

/*
 * Constantes são bastante utilizadas e recomendado em uma aplicação JS
 * Como o próprio nome diz, uma constante não pode ter seu valor modificado
 */

 const z = 500;

 console.log(z);
