// permiten acceder al ambito de una funcion exterior desde una funcion interior.
// En JS, las clausulas son creadas cada vez que una funcion es creada
// No son siempre utilizados. Se utilizan cuando se crea una funcion que es retornada por otra funcion.
// Tienes un closure cuando una funcion cualquiera accede a una variable fuera de su contexto y la recuerda
const myGlobal = 0;

function myFunction() {
  const myNumber = 1;
  console.log(myGlobal);

  function parent() {
    // funcion interna
    const inner = 2;
    console.log(myNumber);
    console.log(myGlobal);

    function child() {
      console.log(inner);
      console.log(myNumber);
      console.log(myGlobal);
    }
    return child();
  }
  return parent();
}

myFunction();
