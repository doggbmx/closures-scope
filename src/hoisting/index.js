// console.log(nameOfDog); // undefined => debido al hoisting
// var nameOfDog;
// nameOfDog = "Elmo";
// console.log(nameOfDog); // Elmo => aca si ya tiene valor

nameOfDog();
function nameOfDog() {
  console.log(`El nombre de mi perrito es: ${elmo}`); // undefined => debido al hoisting
}
var elmo = "Elmo";
