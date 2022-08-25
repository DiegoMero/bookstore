import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';

const Book = (props) => {
  const { id, title, author } = props;
  const dispatch = useDispatch();

  return (
    <li>
      <h3>{title}</h3>
      <h4>{author}</h4>
      <button
        type="button"
        onClick={() => {
          dispatch(deleteBook({ title, author, id }));
        }}
      >
        Remove
      </button>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
