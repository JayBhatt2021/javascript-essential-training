/**
 * The map() array method.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */

const stuffArray = [
  "piggy",
  "headlamp",
  "pen",
  "pencil",
  "eraser",
  "water bottle",
];

const article = document.querySelector("article");
let stuffList = document.createElement("ul");

// map() array method
const stuffListItems = stuffArray.map((arrayItem) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = arrayItem;
  return listItem;
});

// forEach() array method
stuffListItems.forEach((listItem) => stuffList.append(listItem));

console.log("stuffArray:", stuffArray);
console.log("stuffListItems:", stuffListItems);

article.append(stuffList);
