import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.PureComponent {
  render() {
    return (
      <header>
        <h1>Bookstore CMS</h1>
        <div>
          <Link to="/">BOOKS</Link>
          <Link to="/Categories">CATEGORIES</Link>
        </div>
      </header>
    );
  }
}

export default Header;
