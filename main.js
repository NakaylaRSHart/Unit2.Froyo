// const dinner = {
// cheeseburger: 12,
// steak: 20,
// soup: 8,
// macAndCheese: 14,
// soupAndSalad: 16
// };

// console.log(Object.values(dinner));

// const prices = Object.values(dinner);
// let totalCost = 0;

// for( let i = 0; i < prices.length; i++){
//   totalCost += prices[i];
// }

// console.log(totalCost);

// function calculateCost(meal){
//   let total = 0;

//   for(const item in meal){
//     total += meal[item];
//   }
//   return total;
// }

// console.log(calculateCost(dinner));


/*
-Make website prompt for flavors
-Have users input be an array of strings
  -seperated by coammas(split)
-Create a for loop called flavorCount
  -Have it add up the amount of flavors
-Return the amount of flavors.
*/


const userInput = prompt(`Enter a list of Froyo flavors seperated by commas: `)
const itemList =  userInput.split(`,`);

console.log(itemList);

let froyoObject = {};

//Iterates over array and updates the froyoObject
itemList.forEach(function (flavors){
  froyoObject[flavors] = (froyoObject[flavors] || 0) + 1;
});

function froyoList(choice) {
  let total = 0;

  for (const flavors in choice){
    total += choice[flavors];
  }
  return total;
}

console.log(froyoObject);
console.log('Total number of Froyo flavors: ' + froyoList(froyoObject));