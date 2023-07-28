// // THIS DOES NOT WORK, LETS MAKE A CLOSURE
// function moneyBox(coins) {
//   let savedCoins = 0;
//   savedCoins += coins;
//   console.log(`MoneyBox: $${savedCoins}`);
// }

// moneyBox(5);
// moneyBox(1);
// moneyBox(10);

// my method
function moneyBox() {
  let savedCoins = 0;
  return {
    addCoins: function (coins) {
      savedCoins += coins;
      console.log(`MoneyBox: $${savedCoins}`);
    },
  };
}
// I think my method was best <3

let myMoneyBox = moneyBox();
myMoneyBox.addCoins(5);
myMoneyBox.addCoins(10);

// I can create as many moneyBoxes as I want
// teacher method
// function moneyBox() {
//   let savedCoins = 0;
//   function countCoins(coins) {
//     savedCoins += coins;
//     console.log(`MoneyBox: $${savedCoins}`);
//   }
//   return countCoins;
// }

// PLAYGROUND PLATZI IT WAS TOO EZ MY FRENS GIT GUT <3
export function createPetList() {
  let petList = [];
  // Tu código aquí 👈
  return function createPet(petName) {
    if (!petName) {
      return petList;
    } else {
      petList.push(petName);
    }
  };
}
