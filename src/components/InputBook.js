import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';
import './InputBook.css';

const InputBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const addBookHandler = (e) => {
    e.preventDefault();
    const book = {
      id: uuidv4(),
      title,
      author,
      category: 'not categorized yet',
    };
    dispatch(addBook(book));
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="new-book-form">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={addBookHandler}>
        <input clasName="book-input" type="text" placeholder="Book title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required="true" />
        <input className="author-input" type="text" placeholder="Author" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} required="true" />
        <button type="submit" className="add-button">ADD BOOK</button>
      </form>
    </div>
  );
};

export default InputBook;
