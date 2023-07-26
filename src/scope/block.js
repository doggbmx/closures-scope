// let y const se introdujeron en ES6 para solucionar el problema de la reasignación de variables.
// let y const tienen un scope de bloque, es decir, solo se pueden acceder a ellas dentro del bloque en el que fueron creadas.
function fruits() {
  // las variables declaradas dentro de un bloque con let o const no pueden ser accedidas desde fuera del bloque
  if (true) {
    var fruit1 = "apple"; // function scope
    let fruit2 = "banana"; // block scope
    const fruit3 = "kiwi"; // block scope
  }
  console.log(fruit1); // var sí se puede acceder desde fuera del bloque
  console.log(fruit2); // let no se puede acceder desde fuera del bloque
  console.log(fruit3); // const no se puede acceder desde fuera del bloque
}
