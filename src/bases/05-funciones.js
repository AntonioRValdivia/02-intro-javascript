
// Funciones en JS

// function saludar(nombre) {           // Funcion normal, no recomendada porque se puede reasignar
//     return `Hola, ${nombre}`;
// }   

const saludar = function(nombre) {      // Funcion anonima, no se puede reasignar
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {      // Funcion anónima de flecha, no se puede reasignar
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;      // Funcion anónima de flecha sin return

const saludar4 = () => `Hola Mundo`;      // Funcion anónima de flecha sin argumentos

// console.log(saludar('Goku'));
console.log(saludar('Goku'));                  
console.log(saludar2('Vegeta'));          
console.log(saludar3('Trunks'));        
console.log(saludar4());

const getUser = () => ({            // En el caso de retornar un objeto, se debe encerrar entre parentesis
        uid: 'ABC123',
        username: 'fsociety'
});

const user = getUser();
console.log(user);



// Tarea
// 1. Transformar a una funcion de flecha
// 2. Tiene que retornar un objeto implicito

function getUsuarioActivo(nombre) {
    return {
        uid: 'ABC567',
        username: nombre
    }
};

const usuarioActivo = getUsuarioActivo('Elliot');
console.log(usuarioActivo);

const getUsuarioActivo2 = (nombre) =>
    ({
        uid: 'ABC567',
        username: nombre
    });

    const usuarioActivo2 = getUsuarioActivo2('Elliot');
    console.log(usuarioActivo2);