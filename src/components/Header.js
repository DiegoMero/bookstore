import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Bookstore CMS</h1>
    <div>
      <Link to="/">BOOKS</Link>
      <Link to="/Categories">CATEGORIES</Link>
    </div>
  </header>
);

export default Header;
