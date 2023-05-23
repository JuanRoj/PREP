function devuelvoUsuario(x) {
    return 'Camilo';
 }
 function devuelvoSaludo() {
    return 'Hola';
 }
 function saludar(cb1, cb2) {
    return cb1() + ' ' + cb2();
 }
 var resultado = saludar(devuelvoSaludo, devuelvoUsuario);
 console.log(resultado);

 // otro ejemplo
 var devuelvoFrase = function(comida) {
   return 'Hoy quiero comer: '+ comida
 };
 var hablar = function(comida,cb){
   return cb(comida);
 };
 var resultado = hablar('Pizza', devuelvoFrase);
 console.log(resultado)