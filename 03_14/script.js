/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since acquired:", everydayPack.backpackAge());

const theGreatGatsby = new Book("", "F. Scott Fitzgerald", "Tragedy", 208);
theGreatGatsby.setTitle("The Great Gatsby");
console.log("The Great Gatsby:", theGreatGatsby);

const memeBook = new Book("1984", "", "Dystopian", 336);
memeBook.setAuthor("George Orwell");
console.log("1984:", memeBook);

const donQuixote = new Book(
  "Don Quixote",
  "Miguel de Cervantes Saavedra",
  "",
  870
);
donQuixote.setGenre("Fiction");
console.log("Don Quixote:", donQuixote);

const genjiMonogatari = new Book(
  "Genji Monogatari",
  "Murasaki Shikibu",
  "Fantasy",
  0
);
genjiMonogatari.setPageCount(224);
console.log("Genji Monogatari:", genjiMonogatari);

const atomicHabits = new Book(
  "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
  "James Clear",
  "Nonfiction",
  320
);
console.log("Atomic Habits:", atomicHabits);
