/**
 * Book class
 */

const Book = class {
  constructor(title, author, genre, pageCount) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pageCount = pageCount;
  }
  setTitle(title) {
    this.title = title;
  }
  setAuthor(author) {
    this.author = author;
  }
  setGenre(genre) {
    this.genre = genre;
  }
  setPageCount(pageCount) {
    this.pageCount = pageCount;
  }
};

export default Book;
