//Lista de compras
var listaDeCompras =[];
listaDeCompras[3] = 'Tomates';
listaDeCompras[1] = 'Lechuga';
console.log(listaDeCompras);

//Ver lista de compras
var elementoDelArray = listaDeCompras[1];
console.log(elementoDelArray);

// Largo
var nombres = ['Matias', 'María', 'Diego', 'Rosa']
console.log(nombres.length);

// PUSH(agrega dato en la ultima posicion del arreglo) y UNSHIFT(elimina el dato 1era posicion del arreglo)
var colores = ['Amarillo', 'Azul'];
colores.push('Rojo');
colores.unshift('Verde');
console.log(colores);

// POP (elimina el ultimo dato del arreglo) y SHIFT(elimina el primer dato del arreglo)
colores.shift();
colores.pop();
consola.log(colores);

// INCLUDES (verifica si un dato esta o no en el array true o false,con cambiar el valor del includes)
var pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];
var incluyeDali = pintores.includes('Dalí');
console.log(incluyeDali);

// EVERY (puede verificar si el arreglo cumple con una condición, en el siguiente ejemplo si son >5)
var numeros = [ 1, 6, 8, 9, 43 ];
var cumplenCondicion = numeros.every( ( num ) => { num > 5 } );
console.log(cumplirCondicion);

// SPLIT
var palabra = 'Enrique';
var palabraSeparada = palabra.split('');
console.log(palabraSeparada);

// JOIN
var palabraArreglada = palabraSeparada.join('');
consola.log(palabraArreglada);

//ejemplo de los dos metodos anteriores
var palabra = 'Henri';
var palabraSeparada = palabra.split('');
console.log (palabraSeparada);
palabraSeparada.pop()
console.log(palabraSeparada)
palabraSeparada.push('y');
console.log(palabraSeparada);
var palabraArreglada = palabraSeparada.join('')
console.log(palabraArreglada)


// FOR EACH (nos permite recorre un arreglo realizando una accion para algun elemento)
var numeros = [ 1, 2, 3, 4 ];
numeros.forEach( (num) => { console.log(num) } )
numeros.forEach((num) => {if(num===3) {console.log(num)}}) // la accion es mostrar los iguales a 3

// MAP (NOS PERMITE RECCORER UN ARREGLO Y PUEDE REALIZAR CAMBIOS)
var numeros = [ 1, 2, 3, 4 ];
var masUno = numeros.map( (num) => { return num + 1 } );
console.log(masUno);