let myLibrary = [];

const newBookButton = document.querySelector('#new-book-button');

const bookContainer = document.querySelector('#book-container');

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.index;
}

function addBookToLibrary() {
  let title = prompt("Title: ");
  let author = prompt("Author: ");
  let pages = prompt("Pages: ");
  let read = prompt("Read?: (yes/no) ");
  let answer = read.toLowerCase();
  if (answer == "yes") {
    read = true;
  }
  else {
    read = false;
  }
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  newBook.index = myLibrary.indexOf(newBook);
  addBookToDom(newBook);
}

newBookButton.addEventListener('click', addBookToLibrary);

function addBookToDom(newBook) {
  const newBookObject = document.createElement('div');
  newBookObject.classList.add('book');
  bookContainer.appendChild(newBookObject);

  if (newBook.read === true) {
    newBookObject.classList.add('read');
  }

  const bookTitle = document.createElement('div');
  bookTitle.classList.add('title');
  newBookObject.appendChild(bookTitle);
  bookTitle.textContent = newBook.title;

  const bookAuthor = document.createElement('div');
  bookAuthor.classList.add('author');
  newBookObject.appendChild(bookAuthor);
  bookAuthor.textContent = newBook.author;

  const bookPages = document.createElement('div');
  bookPages.classList.add('pages');
  newBookObject.appendChild(bookPages);
  bookPages.textContent = newBook.pages + ' Pages';

  const removeButton = document.createElement('button');
  removeButton.classList.add('remove-button');
  newBookObject.appendChild(removeButton);
  removeButton.textContent = 'Remove';

  removeButton.addEventListener('click', () => removeBookFromLibrary(newBook, newBookObject));

  const readButton = document.createElement('button');
  readButton.classList.add('read-button');
  newBookObject.appendChild(readButton);
  readButton.textContent = 'Read?';

  readButton.addEventListener('click', () => toggleRead(newBook, newBookObject));


}

function removeBookFromLibrary(book, bookDomObject) {
  book.index = myLibrary.indexOf(book);
  myLibrary.splice(book.index, 1);
  bookContainer.removeChild(bookDomObject);
}

function toggleRead(book, bookDomObject) {
  if (book.read === true) {
    book.read = false;
    bookDomObject.classList.remove('read');
  }
  else {
    book.read = true;
    bookDomObject.classList.add('read');
  }
}