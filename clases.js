// function constructora
function auto(puertas, color, marca, año, ruedas) {
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.año = año;
    this.ruedas=ruedas;
    this.information = function () {
        console.log("La marca es: " + this.marca+ " de color " + this.color + " del año "+ this.año);
    };
}

var miPrimerAuto = new auto(2,'azul','Ferrari', 2018, 4)
//console.log (miPrimerAuto)
//console.log (miPrimerAuto.marca)
miPrimerAuto.information ();

//Expresión de clases

class auto{
    constructor (puertas, color, marca, año, ruedas){
        this.puertas = puertas;
        this.color = color;
        this.marca = marca;
        this.año = año;
        this.ruedas=ruedas;
    }
    information (){
        console.log("Este Carro es "+ this.marca + " de color " + this.color)
    }
}
var misegundoAuto = new auto(4, "azul", "fiat", 2005, 4)
console.log (misegundoAuto)
console.log (misegundoAuto.marca)
misegundoAuto.information()

class Football{
    constructor(jugador){
        this.jugador = jugador
    }
    obtenerNombre(){
        console.log (this.jugador)
    }
}
var argentina = new Football("messi");
var brasil = new Football("Pele");

argentina.obtenerNombre()
brasil.obtenerNombre()