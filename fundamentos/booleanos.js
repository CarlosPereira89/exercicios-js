let isActive = false;
console.log(isActive);

isActive = true;
console.log(isActive);

isActive = 1;
console.log(!!isActive);
console.log('as verdadeiras');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!"Texto");
console.log(!!Infinity);
console.log(!!(isActive = true));
console.log(!![]);
console.log(!!{});

console.log('as falsas');
console.log(!!0);
console.log('');
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);
console.log(!!(isActive = false));


console.log(!!('' || null || ' '));

let nome = 'Danilo';
console.log(nome || 'Desconhecido');
