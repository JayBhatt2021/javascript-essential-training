/**
 * How arrow functions help us with scoping.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#this_and_Arrow_Functions
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
 */

// Define a default volume for the window (the entire DOM):
window.volume = 20;

const greenPack = {
  name: "Frog Pack",
  color: "green",
  volume: 8,
  pocketNum: 3,
  newVolume: function (volume) {
    console.log("this.volume in the method:", this.volume);
    this.volume = volume;
    console.log("this.volume after update:", this.volume);
    // Anonymous IIFE hoisted to global scope (outside object).
    (function () {
      console.log(
        "(Global Scope) this.volume in nested function:",
        this.volume
      );
    })();
    // Arrow IIFE stays in local scope. Arrow functions have no innate concept of "this".
    // The arrow function looks around to figure out what "this" is.
    (() => {
      console.log("(Local Scope) this.volume in nested function:", this.volume);
    })();
  },
};

console.log(greenPack.newVolume(5));
