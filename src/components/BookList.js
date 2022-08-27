import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import InputBook from './InputBook';
import { getBooks } from '../redux/books/books';

const BooksList = () => {
  const item = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <>
      <ul>
        {item.item.map((data) => (
          <Book key={data.id} id={data.id} title={data.title} author={data.author} />
        ))}
      </ul>
      <InputBook />

    </>
  );
};

export default BooksList;
