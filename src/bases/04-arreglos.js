
// Arreglos en JS

// const arreglo  = new Array(100);     // Forma de declarar un arreglo con un tamaño fijo (poco usada)

const arreglo = [1,2,3,4];              // Forma de declarar un arreglo mas comun
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);
// No usar el push para agregar un elemento al arreglo, ya que modifica el objeto original

let arreglo2 = [...arreglo, 5];         // Operador spread. Una mejor forma de agregar un elemento al arreglo, asi no se modifica el objeto original

const arreglo3 = arreglo2.map(function(numero) {  // Map, realiza una operacion por cada elemento del arreglo
    return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);

