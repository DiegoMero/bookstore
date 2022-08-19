import React from 'react';
import PropTypes from 'prop-types';

class Book extends React.PureComponent {
  render() {
    const { title, author } = this.props;
    return (
      <li>
        <h3>{title}</h3>
        <h4>{author}</h4>
        <button type="button">Remove</button>
      </li>
    );
  }
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
