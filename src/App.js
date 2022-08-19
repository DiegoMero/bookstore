import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BooksList from './components/BookList';
import Categories from './components/Categories';

export default class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<BooksList />} />
          <Route path="/Categories" element={<Categories />} />
        </Routes>
      </div>
    );
  }
}
