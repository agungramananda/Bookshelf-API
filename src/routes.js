const {
  saveNewBook,
  getAllBooks,
  getBookById,
  editBookData,
  deleteBookData,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: saveNewBook,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooks,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookById,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookData,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookData,
  },
];

module.exports = routes;
