const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const DELETE_BOOK = 'bookstore/books/DELETE_BOOK';

const fewBooks = [
  {
    title: 'La vuelta al mundo en 80 días',
    author: 'Jhon Carpenter',
    id: '1',
  },
  {
    title: 'El psicoanalista',
    author: 'Kowalsky',
    id: '2',
  },
  {
    title: 'Frankestein',
    author: 'Steven Spielberg',
    id: '3',
  },
];

const bookReducer = (state = fewBooks, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return state.concat(action.book);
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
