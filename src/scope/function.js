function greeting() {
  let userName = "John";
  console.log(userName);

  if (userName === "John") {
    console.log(`Hello ${userName}`);
  }
}

greeting();
// THE NEXT LINE WON'T WORK, BC userName is not defined in the global scope
// console.log(userName);
