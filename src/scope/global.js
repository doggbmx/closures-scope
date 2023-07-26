// variables
var a; // declarando
var b = "b"; // declarando y asignando
b = "bb"; // reasignando
var a = "aa"; // redeclarando

// Global Scope
var fruit = "apple"; // alcance global

function bestFruit() {
  console.log(fruit);
}

bestFruit();

// lil example
function countries() {
  // de esta forma queda como variable GLOBAL, mucho cuidado
  country = "Paraguay"; // si te das cuenta, no estamos declarando la variable, solo la estamos asignando
  console.log(country);
}

countries();
// esto falla?
console.log(country); // nop, porque la variable country es global
