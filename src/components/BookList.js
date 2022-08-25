import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import InputBook from './InputBook';

const BooksList = () => {
  const bookList = useSelector((state) => state.books);

  return (
    <>
      <ul>
        {bookList.map((book) => (
          <Book
            key={book.id}
            title={book.title}
            author={book.author}
            id={book.id}
          />
        ))}
      </ul>
      <InputBook />
    </>
  );
};

export default BooksList;
