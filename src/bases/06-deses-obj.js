
// Desestructuración de objetos

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};     

const {nombre, edad, clave} = persona;      // Desestructuración de objetos

console.log(nombre);
console.log(edad);
console.log(clave);                         // Se imprime el valor de cada llave en variables independientes




// Desestructuración de objetos en argumentos de una función

const retornaPersona = ({nombre, edad, rango = 'Capitán'}) => {    // Si no se envía el valor de rango, se asigna el valor por defecto, en el caso de que se envíe el valor, se usa el del objeto

    console.log(nombre, edad, rango);
};  

retornaPersona(persona);                    // Se envía el objeto persona como argumento de la función retornaPersona


// useContext           

const makingContext = ({clave, nombre, edad, rango = 'Capitán'}) => {  

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}  

const {nombreClave, anios, latlng:{lat, lng}} = makingContext(persona);    // desestructuración de objetos anidados, las variables lat y lng se obtienen del objeto latlng
// const {lat, lng} = latlng;                                                 // Se puede desestructurar el objeto latlng en una variable independiente

console.log(nombreClave, anios);           
console.log(lat, lng);           

