/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const tumsContainer = {
  name: "Calcium Carbonate TUMS Antacid",
  flavor: "Melon Berry",
  count: 80,
  uses: [
    "heartburn",
    "acid indigestion",
    "sour stomach",
    "upset stomach associated with these symptoms",
  ],
  tablet: {
    shape: "circle",
    colors: ["pink", "yellow"],
  },
};

console.log("The tumsContainer object:", tumsContainer);
console.log("tumsContainer tablet colors:", tumsContainer["tablet"].colors);

const dartBoard = {
  redDartCount: 3,
  blackDartCount: 3,
};

console.log("The dartBoard variable:", dartBoard);
console.log("Number of red darts:", dartBoard.redDartCount);
