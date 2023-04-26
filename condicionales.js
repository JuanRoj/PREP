function viajar(destino) {
    if(destino === 'Brasil') {
             console.log('Gire a la izquierda');
    } else if(destino === 'Argentina') {
             console.log('Gire a la derecha');
    } else if (destino === 'Venezuela') {
        console.log('llegamos a nuestro pais');
    }
    else {
             console.log('Nos perdimos');''
    }
  };
  viajar('Venezuela');
  viajar('Brasil');
  viajar('Argentina');
  //
  //
  function puedeManejar(edad) {
    if(edad >= 18) {
             console.log( true );
    } 
    console.log( false );
  }
  
  puedeManejar(17);