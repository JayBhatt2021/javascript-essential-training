/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

const keyboard = {
  name: "My Keyboard",
  color: "black",
  company: "logi",
  madeIn: "China",
  quality: "decent",
  isResponsive: false,
};
const main = document.querySelector("main");

// 1) Function Declaration
function addArticleToMain1() {
  main.appendChild(createKeyboardArticle1());
}

function createKeyboardArticle1() {
  const articleElement = document.createElement("article");
  articleElement.innerHTML = `
  <h1>${keyboard.name}</h1>
  <ul>
    <li>Color: ${keyboard.color}</li>
    <li>Company: ${keyboard.company}</li>
    <li>Made In: ${keyboard.madeIn}</li>
    <li>Quality: ${keyboard.quality}</li>
    <li>Is Responsive?: ${keyboard.isResponsive}</li>
  </ul>
  `;
  return articleElement;
}

addArticleToMain1();

// 2) Function Expression
const addArticleToMain2 = function () {
  main.appendChild(createKeyboardArticle2());
};

const createKeyboardArticle2 = function () {
  const articleElement = document.createElement("article");
  articleElement.innerHTML = `
    <h1>${keyboard.name}</h1>
    <ul>
      <li>Color: ${keyboard.color}</li>
      <li>Company: ${keyboard.company}</li>
      <li>Made In: ${keyboard.madeIn}</li>
      <li>Quality: ${keyboard.quality}</li>
      <li>Is Responsive?: ${keyboard.isResponsive}</li>
    </ul>
    `;
  return articleElement;
};

addArticleToMain2();

// 3) Arrow Function
const addArticleToMain3 = () => {
  main.appendChild(createKeyboardArticle3());
};

const createKeyboardArticle3 = () => {
  const articleElement = document.createElement("article");
  articleElement.innerHTML = `
      <h1>${keyboard.name}</h1>
      <ul>
        <li>Color: ${keyboard.color}</li>
        <li>Company: ${keyboard.company}</li>
        <li>Made In: ${keyboard.madeIn}</li>
        <li>Quality: ${keyboard.quality}</li>
        <li>Is Responsive?: ${keyboard.isResponsive}</li>
      </ul>
      `;
  return articleElement;
};

addArticleToMain3();
