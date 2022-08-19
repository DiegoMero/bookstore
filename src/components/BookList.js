import React from 'react';
import Book from './Book';
import InputBook from './InputBook';

class BooksList extends React.PureComponent {
  render() {
    return (
      <>
        <ul>
          <Book />
        </ul>
        <InputBook />
      </>
    );
  }
}

export default BooksList;
