import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import './Book.css';

const Book = (props) => {
  const { id, title, author } = props;
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(removeBook(id));
  };

  return (
    <li className="book-container">
      <div className="book-information">
        <h5>Unknown</h5>
        <h3>{title}</h3>
        <h4>{author}</h4>
        <div>
          <button type="button" className="comments-button">Comments</button>
          <span />
          <button type="button" onClick={clickHandler} className="remove-button">Remove</button>
          <span />
          <button type="button" className="edit-button">Edit</button>
        </div>
      </div>
      <div className="book-progress">
        <div className="progress-bar" />
        <div>
          <h3>0%</h3>
          <h4>Completed</h4>
        </div>
      </div>
      <span />
      <div className="book-chapter">
        <h4>CURRENT CHAPTER</h4>
        <h3>Chapter 1</h3>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
