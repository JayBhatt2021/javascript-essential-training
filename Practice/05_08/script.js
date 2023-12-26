/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */

// 1) Add two classes to a element
const greenSpan = document.querySelector(
  "article#pack02 ul li.backpack__color span"
);
greenSpan.classList.add("classOne");
greenSpan.classList.add("classTwo");
console.log(greenSpan.classList);

// 2) Remove one of the newly-added classes from said element
greenSpan.classList.remove("classOne");
console.log(greenSpan.classList);

// 3) Add an attibute to said element
greenSpan.setAttribute("data-attribute-example", "This is the data.");
console.log(greenSpan.attributes);

// 4) Request the value of the newly-added attribute
console.log(greenSpan.getAttribute("data-attribute-example"));

// 5) Change the value of the newly-added attribute
greenSpan.setAttribute("data-attribute-example", "Changed!");
console.log(greenSpan.getAttribute("data-attribute-example"));

// 6) Add inline CSS to the element
greenSpan.style.color = "green";

// 7) Query all styles of this element
console.log(greenSpan.style);
