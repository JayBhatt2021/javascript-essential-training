/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

// 1
const array = [
  "phone",
  "paper",
  "headphones",
  "tablet",
  "dartboard",
  "wires",
  "gum",
  "spoons",
];

// 2 and 3
array.unshift(array.pop());
console.log(array);

// 4
array.sort();
console.log(array);

// 5 and 6
array.splice(array.indexOf("phone"), 1);
console.log(array);
