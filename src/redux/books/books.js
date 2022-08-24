const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const DELETE_BOOK = 'bookstore/books/DELETE_BOOK';

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return state.push([action.book]);
    case DELETE_BOOK:
      return state.filter((book) => JSON.stringify(book) !== JSON.stringify(action.book));
    default:
      return state;
  }
};

const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

const deleteBook = (book) => ({
  type: DELETE_BOOK,
  book,
});

export default bookReducer;
export { addBook, deleteBook };
