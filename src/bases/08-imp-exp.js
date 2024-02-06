

// import/export

import { heroes } from './data/heroes';       // Se puede usar el shortcut imp o solo escribir heroes


// Array.find()

// const getHeroesById = (id) =>{
//     return heroes.find( (heroe) => {
//         if(heroe.id === id){
//             return true;
//         } else {
//             return false;
//         }
//     });
// }


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