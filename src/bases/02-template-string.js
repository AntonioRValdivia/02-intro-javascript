// Template string

const nombre = 'Antonio';
const apellido = 'Valdvia';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;     

console.log(nombreCompleto);

let getSaludo = (nombre) => {
    return `Hola ${nombre}`;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);