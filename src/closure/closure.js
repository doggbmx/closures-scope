function greeting() {
  let userName = "doggbmx";

  function displayUserName() {
    return `Hello ${userName}!`;
  }

  return displayUserName;
}

const g = greeting();
// imprimimos su refencia
console.log(g); // [Function: displayUserName]
// imprimimos su ejecucion
console.log(g()); // Hello doggbmx!
