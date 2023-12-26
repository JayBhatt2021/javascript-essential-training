/**
 * The let statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
 */

let color = "purple";

document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;

color = "skyblue";

function headingColor() {
  let titleColor = "blue";
  document.querySelector(".title").style.color = titleColor;
  console.log("inside headingColor()", titleColor);
}

headingColor();

// Reference Error -> JS stops rendering -> right rectangle becomes green
// console.log("outside headingColor()", titleColor);

document.querySelector(".right").style.backgroundColor = color;
document.querySelector(".right .color-value").innerHTML = color;
