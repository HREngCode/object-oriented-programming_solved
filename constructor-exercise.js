/* Please read the instructions located in the 1-constructor-exercise-readme.md file and complete your code below */

function Book(title, author, year, genre) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.genre = genre;
}

//get summary method
Book.prototype.getSummary = function () {
  return `${this.title} is a ${this.genre} book that was published in ${this.year}`;
};

//is classic method
Book.prototype.isClassic = function () {
  const currentYear = new Date().getFullYear;
  return currentYear - this.year > 50;
};

//update year method
Book.prototype.updateYear = function (newYear) {
  this.year = newYear;
  return `Publication year updated to ${newYear}`;
};

//change genre method
Book.prototype.changeGenre = function (newGenre) {
  this.genre = newGenre;
  return `Genre updated to ${newGenre}`;
};

const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960, "Fiction");

//Testing
console.log(book1.getSummary());
console.log(book1.isClassic());
console.log(book1.updateYear(1965));
console.log(book1.changeGenre("Drama"));
