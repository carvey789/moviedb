import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <h1>Logo</h1>
      <ul className='nav-links'>
          <Link to='/'><li>Home</li></Link>
          <Link to='/movie'><li>Search Movie</li></Link>
      </ul>
    </nav>
  );
}

export default Nav;
