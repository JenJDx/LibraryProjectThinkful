function findAuthorById(authors, id) {
  // YOUR SOLUTION HERE
  return authors.find(author => id === author.id);
}

function findBookById(books, id) {
  // YOUR SOLUTION HERE
  return books.find(books => books.id === id);
}

// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function partitionBooksByBorrowedStatus(books) {
  return books.reduce(
    (acc, book) => {
      const [borrowed, returned] = acc;
      const recent = book.borrows[0];
      if (recent.returned) {
        returned.push(book);
      } else {
        borrowed.push(book);
      }

      return acc;
    },
    [[], []]
  );
}

function getBorrowersForBook(book, accounts) {
 return book.borrows.map(borrow => {
   const acct = accounts.find(account => {
      return account.id === borrow.id
    });
    return {
      ...acct, 
      returned: borrow.returned
    }
  }).slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
