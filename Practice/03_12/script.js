/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objects by calling their properties and using their methods in the console.
 */

import Box from "./Box.js";

const plasticBox = new Box(
  "Plastic Box",
  { length: 10, width: 5, height: 5 },
  false,
  ["Papers", "Scraps"]
);
const cardboardBox = new Box(
  "Cardboard Box",
  { length: 7, width: 3, height: 4 },
  true,
  ["CDs", "Manilla Envelopes", "Books"]
);

plasticBox.setName("Awesome Plastic Box");
console.log("The plasticBox variable:", plasticBox);
plasticBox.printDimensions();

cardboardBox.toggleLidStatus();
cardboardBox.emptyBox();
console.log("The cardboardBox variable:", cardboardBox);
