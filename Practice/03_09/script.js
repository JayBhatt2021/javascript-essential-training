/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNumber: 15,
  lidStatus: false,
  strapLength: {
    left: 26,
    right: 26,
  },
  setName: function (name) {
    this.name = name;
  },
  setVolume: function (volume) {
    this.volume = volume;
  },
  setColor: function (color) {
    this.color = color;
  },
  setPocketNumber: function (pocketNumber) {
    this.pocketNumber = pocketNumber;
  },
  toggleLid: function () {
    this.lidStatus = !this.lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

backpack.setName("Advanced Backpack");
backpack.setVolume(backpack.volume * 2);
backpack.setColor("gold");
backpack.setPocketNumber(20);
backpack.toggleLid();
backpack.newStrapLength(30, 30);
console.log(
  `New Name: ${backpack.name}\nNew Volume: ${backpack.volume}\nNew Color: ${backpack.color}\nNew Pocket Number: ${backpack.pocketNumber}\nNew Lid Status: ${backpack.lidStatus}\nNew Strap Length: (${backpack.strapLength.left}, ${backpack.strapLength.right})`
);
