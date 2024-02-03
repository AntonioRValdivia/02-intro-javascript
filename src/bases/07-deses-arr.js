

// Desestructuración de arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p3] = personajes;                     // Como los arr automaticamente se indexan a 0, para especificar los elementos se dejan comas vacias
console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);


// useState

const usingState = (valor) => {
    return [valor, () => { console.log('Hola Mundo') }];
}

const arr = usingState('Goku');
console.log(arr);


// Tarea
// 1. el primer valor del arr se llamará nombre
// 2. el segundo setNombre

const usingState2 = (valor) => {
    return [valor, () => { console.log('Hola Mundo') }];
}

const [nombre, setNombre] = usingState2('Goku');
console.log(nombre); 
setNombre();