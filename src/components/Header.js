import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <h1>Bookstore CMS</h1>
    <div>
      <Link to="/" className="book-header">BOOKS</Link>
      <Link to="/Categories" className="categories-header">CATEGORIES</Link>
    </div>
    <div className="user-border">
      <i className="fa-solid fa-user" />
    </div>
  </header>
);

export default Header;
