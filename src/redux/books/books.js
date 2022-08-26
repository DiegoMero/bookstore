const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const DELETE_BOOK = 'bookstore/books/DELETE_BOOK';

const fewBooks = [
  {
    title: 'Around the World in Eighty Days',
    author: 'Jules Verne',
    id: '1',
  },
  {
    title: 'The analyst',
    author: 'John Katzenbach',
    id: '2',
  },
  {
    title: 'Frankenstein',
    author: 'Mary Shelley',
    id: '3',
  },
];

const bookReducer = (state = fewBooks, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
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
