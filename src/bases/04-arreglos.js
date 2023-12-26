
// Arreglos en JS

// const arreglo  = new Array(100);

const arreglo = [1,2,3,4];
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);
// No usar el push para agregar un elemento al arreglo

let arreglo2 = [...arreglo, 5]; // Operador spread. Una mejor forma de agregar un elemento al arreglo

const arreglo3 = arreglo2.map(function(numero) {  // Map, realiza una operacion por cada elemento del arreglo
    return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);

