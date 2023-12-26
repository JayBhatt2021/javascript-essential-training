/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */

// 1) All elements with the "feature" class
console.log(document.querySelectorAll(".feature"));

// 2) First article figure img element
console.log(document.querySelector("article figure img"));

// 3) First element with the "pack01" ID
console.log(document.querySelector("#pack01"));

// 4) First input element inside of a form element with the "leftlength" class
console.log(document.querySelector("form.leftlength input"));

// 5) Challenge Exercise
const backpackFeatures = document.querySelector(".backpack__features");
backpackFeatures.innerHTML = `
<li class="feature backpack__volume">Volume:<span> 30l</span></li>
<li class="feature backpack__color">Color:<span> grey</span></li>
<li class="feature backpack__age">Age:<span> 684 days old</span></li>
<li class="feature backpack__pockets">
  Number of pockets:<span> 15</span>
</li>
<li class="feature backpack__strap" data-side="left">
  Left strap length: <span>26 inches</span>
  <form class="leftlength" data-children-count="1">
    <input
      type="number"
      name="leftLength"
      placeholder="New left length"
    />
    <button>Update</button>
  </form>
</li>
<li class="feature backpack__strap" data-side="right">
  Right strap length: <span>26 inches</span>
  <form class="rightlength" data-children-count="1">
    <input
      type="number"
      name="rightLength"
      placeholder="New right length"
    />
    <button>Update</button>
  </form>
</li>
<li class="feature backpack__lid">Lid status: <span>closed</span></li>
`;
console.log(backpackFeatures.querySelector("li:last-child"));
