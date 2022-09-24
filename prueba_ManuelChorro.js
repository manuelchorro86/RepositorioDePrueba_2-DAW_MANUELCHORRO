let cadena = prompt('Introduce una cadena ');

console.log(cadena.toUpperCase());
console.log(cadena.toLowerCase());

const invertirCadena = cadena => cadena.split("").reverse().join("");

console.log("Cadena : ", invertirCadena(cadena));

let longitud = cadena.length;

console.log(longitud);