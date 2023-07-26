var firstName; // su valor es undefined
firstName = "fulano"; // ahora su valor cambia al ser asignado
console.log(firstName);

var lastName = "de tal"; // declarando y asignando
var lastName = "del fondo"; // reasignando
console.log(lastName);

var secondName = "mengano"; // declarando y asignando
var secondName = "mengana"; // reasignando
console.log(secondName);

// intentaremos lo mismo pero con let
let fruit = "apple"; // se puede declara y asignar
fruit = "banana"; // se puede reasignar
// que pasa si intentamos redeclarar?
// let fruit = 'orange'; // SyntaxError: Identifier 'fruit' has already been declared
console.log(fruit);

// intentaremos lo mismo pero con const
// const posee las reglas mas robustas y siempre presentan un desafio
const animal = "dog";
// animal = 'cat'; // TypeError: Assignment to constant variable.
// const animal = 'cat'; // SyntaxError: Identifier 'animal' has already been declared
console.log(animal);

// igual aunque const no se puede reasignar, si se puede mutar
const vehiculos = ["carro", "moto", "bicicleta"];
vehiculos.push("avion");
// aca veremos que el array muto aunque sea una constante
console.log(vehiculos);
