//Operaciones de comparacion
console.log (4 < 7);
console.log (4 < 1);
console.log (4 > 4);
console.log (4 == 7);
console.log (4!=7);
// asignación (=), igualdad (== valor) (=== tipo de dato y valor)
console.log (3 == 3); // True
console.log (3 === 3); // True
console.log (3 =='3'); // True
console.log (3 === '3'); // False
var a = 1;
var b = 2;
var c = 3;
var c =(a=b); // según la precedencia, la asignación tiene una asociatividad a la derecha
console.log(a);
console.log(b);
console.log(c);
console.log (18/4/2); // la división tiene una asociatividad a la izquierda