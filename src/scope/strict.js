// // TRAS BAMBALINAS PASO ESTO
// // var pi; // esto lanzo un undefined y luego fue asignado
// pi = 3.1416;
// // esto imprime aunque no se haya declarado la variable, solo se asigno
// console.log(pi);

// ahora seremos mas estrictos
"use strict";
// esto lanza un error porque no se ha declarado la variable
// pi = 3.1416;
// si declaramos todo estara bien
// var pi = 3.1416;
// console.log(pi);

// probemos con una funcion
function test() {
  "use strict";
  // esto lanzara un error
  return (pi = 3.1416);
}
console.log(test());
