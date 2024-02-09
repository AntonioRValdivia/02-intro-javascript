import { getHeroesById } from './bases/08-imp-exp';

// Promsise

const promesa = new Promise( (resolve, reject) => {     // resolve: se ejecuta cuando la promesa se resuelve, reject: se ejecuta cuando la promesa no se resuelve

    setTimeout( () => {         // Simula un código asincrono
        resolve();
    }, 2000);

});

promesa.then( () => {                   // then: se ejecuta cuando se usa el resolve
    console.log('Then de la promesa')
})

// Ejemplo 2
const promesa2 = new Promise ( (resolve, reject) => {       // Simula una petición a una base de datos

    setTimeout( () => {
        const heroe = getHeroesById(2);
        resolve(heroe);
    }, 2000);

});

promesa2.then( (heroe) => {
    console.log('heroe', heroe)
})
.catch( err => console.warn(err));      // catch: se ejecuta cuando se usa el reject

//  Simulando que busca en una BD
const getHeroeByIdAsync = (id) => {

    return new Promise ( (resolve, reject) => {      // Para mandar el resolve o reject se usa el return

        setTimeout( () => {
           const p1 = getHeroesById(id);
           if(p1){                          // Condicional por si se encuentra o no el héroe
               resolve( p1 );
           } else {
               reject( 'No se pudo encontrar el héroe' );
        }
        }, 2000);
    
    });

}

getHeroeByIdAsync(1)
    .then( console.log )
    .catch( console.warn );



    // .then( heroe => console.log('Heroe', heroe))     // No es necesario la variable heroe
    // .catch( err => console.warn(err) )    

