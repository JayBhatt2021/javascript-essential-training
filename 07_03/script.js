/**
 * Working with array methods
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods
 */

let backpackContents = ["piggy", "headlamp", "pen"];

backpackContents.push("pencil", 5);
backpackContents.unshift("backpack");
backpackContents.pop();
console.log(backpackContents.join(", "));

backpackContents.forEach((item) => {
  item = `<li>${item}</li>`;
  console.log(item);
});

let firstlongItem = backpackContents.find((item) => {
  if (item.length >= 5) {
    return item;
  }
});
console.log("firstLongItem:", firstlongItem);
