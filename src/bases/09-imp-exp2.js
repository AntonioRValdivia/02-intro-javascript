

// import/export por defecto

import {heroes} from './data/heroes';    
// import heroes from './bases/data/heroes';     // En la exportación por defecto no se utilizan las llaves
// import heroes, { owners } from './bases/data/heroes';    // En por defecto no se usan llaves y en la otra si



// Callback que se ejecuta por cada elemento del array
// find() devuelve el primer elemento que cumpla con la condición (id)
const getHeroesById = (id) =>{       
    return heroes.find( (heroe) => heroe.id === id ); 
}

console.log(getHeroesById(2)); // {id: 2, name: 'Spiderman', owner: 'Marvel'}




// Array.filter()
// filter() devuelve un nuevo array con los elementos que cumplan con la condición
const getHeroesByOwner = (owner) =>{
    return heroes.filter( (heroe) => heroe.owner === owner );
} 

console.log(getHeroesByOwner('DC')); 