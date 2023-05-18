var deporte = { 
    conbalon:['Football', 'Basketball','Rugby'],
    sinBalon:['Boxeo','Surf','Trekking'],
};
var persona = {
    nombre: 'Lucas', 
    edad: 26, 
    estudios:{esProgramador: true}
}
//console.log (persona.edad);
persona.nombre ='Juan';
persona.edad = 32
console.log (persona.edad);

// ACCEDER A VALORES
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
console.log(persona.edad);
// ASIGNAR VALORES
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
console.log (persona)
persona.nombre = 'Martín';
console.log(persona);
//CREAR VALORES
var autos = {};
autos.marcas = ['Ford', 'Audi', 'Ferrari'];
console.log(autos);
//BORRAR VALORES
delete autos.marcas;
console.log(autos);
// DOT NOTATION
var atuendos = { manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes'] };
// BRACKET NOTATION
atuendos['piernas'] = ['Bermudas', 'Pantalones']; 
console.log(atuendos);
// ejemplo donde no se puede usar dot notation
var comidas ={};
var diferenciaDeNotaciones = function (propUno, propDos){
    comidas[propUno]= ['FRUTAS', 'VEGETALES'];
    comidas[propDos]= ['Hamburguesa','Papas Fritas'];
};
diferenciaDeNotaciones('saludable','nosaludable');
console.log(comidas);

// HAS OWN PROPERTY busca el valor en el objeto
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var tienePropiedad = libro.hasOwnProperty('genero');

console.log(tienePropiedad);

// KEYS trae todas los nombres de las propiedades 
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var todasLasPropiedades = Object.keys(libro);

console.log(todasLasPropiedades);

// bucle for in en objetos
var mundo = { continentes: 7, paises: 195, oceanos:5};
for (var prop in mundo){
    console.log('Esta es la propiedad:' + prop)
    console.log('Este es el valor:' + mundo[prop]);
}

//THIS contextualizar dentro del objeto
var mascota = {
    animal: 'Perro',
    raza: 'Ovejero Alemán',
    amistoso: true,
    dueño: 'María López',
    info: function () {
       console.log('Mi perro es un  ' + this.raza);
    },
 };
 mascota.info ()

 // how to make the snake game in javascript

 


