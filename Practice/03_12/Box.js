/**
 * Box class
 */

const Box = class {
  constructor(name, dimensions, lidOpen, things) {
    this.name = name;
    this.dimensions = {
      length: dimensions.length,
      width: dimensions.width,
      height: dimensions.height,
    };
    this.lidOpen = lidOpen;
    this.things = things;
  }
  setName(name) {
    this.name = name;
  }
  printDimensions() {
    console.log(
      `The dimensions of the box are (L: ${this.dimensions.length}, W: ${this.dimensions.width}, H: ${this.dimensions.height}).`
    );
  }
  toggleLidStatus() {
    this.lidOpen = !this.lidOpen;
  }
  emptyBox() {
    this.things = [];
  }
};

export default Box;
