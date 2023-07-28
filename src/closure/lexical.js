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

// Cada vez que se ejeccuta una funcion en javascript, se crea un nuevo contexto de ejecucion
// con un nuevo entorno lexico.
// Uso de closures:
// 1. Proteger el acceso a las variables
// 2. Fabrica de funciones (?)

function crearContador(contador = 0) {
  // las clausuras pueden seguir accediendo a esta variable
  //   let contador = 5; // puede ir declarada aqui, o como parametro de la funcion
  // TODAS ESTAS FUNCIONES SON CLOSURES
  return {
    incrementar: function () {
      contador++;
      return contador;
    },
    decrementar: function () {
      contador--;
      return contador;
    },
    valor: function () {
      return contador;
    },
  };
}

contador1 = crearContador();
console.log(contador1.incrementar());
contador1.decrementar();
contador1.valor();

// COMPLEX CLOSURES
// movimos el color a un entorno global para mejorar la memoria
const colorLetra = "color: white;";
function crearImpresoraDeMensajes(tipo, estilos) {
  // si te das cuenta la variable str nunca es llamada, pero sigue existiendo en el contexto de la funcion
  return function mensaje(str) {
    console.log(`%c ${tipo}: ${str} `, estilos + colorLetra);
  };
}
// el clor:white; se repite muchas veces, la encerramos en una variable en la funcion padre
const error = crearImpresoraDeMensajes(
  "Error",
  //   "background: red; color: white;"
  "background: red;"
);
const warning = crearImpresoraDeMensajes(
  "Warning",
  //   "background: orange; color: white;"
  "background: orange;"
);
const exito = crearImpresoraDeMensajes(
  "Éxito",
  //   "background: green; color: white;"
  "background: green;"
);
// si queremos darle valor al parametro str, lo hacemos asi:
error("Algo salió mal");
warning("Algo salió mal");
exito("Algo salió bien");
