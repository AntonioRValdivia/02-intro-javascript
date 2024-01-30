
// Desestructuración de objetos

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};     

const {nombre, edad, clave} = persona;      // Desestructuración de objetos

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const retornaPersona = ({ nombre, edad, rango = 'Capitán' }) => {      // Desestructuración de objetos
    // console.log(nombre, edad, rango);
}   

retornaPersona(persona);



