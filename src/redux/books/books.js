import { createAsyncThunk } from '@reduxjs/toolkit';
import url from '../../components/APIurl';

const START = 'bookstore/books/START_GETTING_BOOKS';
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const DELETE_BOOK = 'bookstore/books/DELETE_BOOK';
const GET_BOOKS = 'bookstore/books/GET_BOOKS';
const FAIL = 'bookstore/books/FAILURE_GETTING_BOOKS';

const newBook = {
  item: [],
  loading: false,
  error: null,
};

export const bookReducer = (state = newBook, action = {}) => {
  const remove = (sourceList, value) => {
    const index = sourceList.indexOf(value);
    if (index >= 0 && index < sourceList.length) {
      return [
        ...sourceList.slice(0, index),
        ...sourceList.slice(index + 1),
      ];
    }
    return sourceList;
  };

  const { payload } = action;

  switch (action.type) {
    case 'bookstore/books/GET_BOOKS/pending':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'bookstore/books/GET_BOOKS/fulfilled':
      return {
        ...state,
        loading: false,
        error: payload.value.error,
        item: payload.value,
      };
    case 'bookstore/books/ADD_BOOK/fulfilled':
      return {
        ...state,
        loading: false,
        error: payload.value.error,
        item: [...state.item, payload.value],
      };
    case 'bookstore/books/DELETE_Book/fulfilled':
      return {
        ...state,
        loading: false,
        error: payload.value.error,
        item: remove(state.item, state.item.filter((items) => items.id === payload.value)[0]),
      };
    case FAIL:
      return {
        ...state,
        loading: false,
        error: payload.value.error,
        item: [],
      };
    default:
      return state;
  }
};

export const getBooksFailed = (result) => ({ type: START, value: result });

const errorHandler = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

export const getBooks = createAsyncThunk(GET_BOOKS, async () => fetch(`${url}/books`)
  .then(errorHandler)
  .then((response) => response.json())
  .then((json) => {
    const books = [];
    Object.entries(json).forEach((key) => {
      const uuid = key[0];
      const { title, author } = key[1][0];
      const book = { id: uuid, title, author };
      books.push(book);
    });
    return { value: books };
  })
  .catch((error) => error));

export const addBook = createAsyncThunk(ADD_BOOK, async (book) => fetch(`${url}/books`, {
  method: 'POST',
  body: JSON.stringify({
    item_id: `${book.id}`,
    title: `${book.title}`,
    author: `${book.author}`,
    category: `${book.category}`,
  }),
  headers: {
    'Content-type': 'application/json',
  },
}).then(() => ({ value: book })));

export const deleteBook = createAsyncThunk(DELETE_BOOK, (id) => fetch(`${url}/books/${id}`, {
  method: 'DELETE',
  body: '',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
}).then(() => ({ value: id })));
