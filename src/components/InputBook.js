import { useState, React } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const InputBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        dispatch(addBook({ title, author, id: uuidv4() }));
        setTitle('');
        setAuthor('');
      }}
      >
        <input type="text" placeholder="Book title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Author" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default InputBook;
