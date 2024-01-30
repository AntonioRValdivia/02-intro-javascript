const persona = {
    nombre: 'tony',
    apellido: 'stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 55321321,
        lat: 14.3232,
        lng: 34.9233321 
    }
};

// console.table( persona );

const persona2 = { ...persona };        // Spread operator, crea una copia del objeto
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);