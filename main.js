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
//I added the lower case to avoid case sensitive errors when counting.
itemList.forEach(function (flavors){
  flavors = flavors.trim().toLowerCase();
  froyoObject[flavors] = (froyoObject[flavors] || 0) + 1;
});

function froyoList(choice) {
  let total = 0;

  for (const flavors in choice){
    total += choice[flavors];
  }
  return total;
}

//Removes duplicates and lets me keep the `amount of cups`
function froyoList(choice){
  const uniqueFlavors = new Set(Object.keys(choice));

  const totalUnique = uniqueFlavors.size;

  const totalItems = itemList.length;

  return{ totalUnique, totalItems}
}

console.log(froyoObject);
const { totalUnique, totalItems } = froyoList(froyoObject);
console.log(`Total number of Froyo flavors: ${totalUnique}`);
console.log(`Total number of cups bought: ${totalItems}`);