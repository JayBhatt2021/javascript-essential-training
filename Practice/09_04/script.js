/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

const grid = document.querySelector(".grid");
const gridCells = document.querySelectorAll(".cell");
const body = document.body;

// 1) Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
grid.addEventListener("mouseenter", () => {
  grid.style.outline = "2rem solid red";
});

grid.addEventListener("mouseleave", () => {
  grid.style.outline = "";
});

// 2) Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
// 3) Add an event listener to each grid cell to change its background color when it is clicked.
gridCells.forEach((cell) => {
  cell.addEventListener("mouseenter", () => {
    cell.style.backgroundColor = "green";
  });

  cell.addEventListener("mouseleave", () => {
    cell.style.backgroundColor = "";
  });

  cell.addEventListener("click", () => {
    cell.style.backgroundColor = "blue";
  });
});

// 4) Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
body.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    body.style.backgroundColor =
      body.style.backgroundColor === "white" ? "#AAA" : "white";
  }
});
