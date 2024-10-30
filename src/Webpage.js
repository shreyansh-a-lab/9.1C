import React from 'react';
import { Link } from 'react-router-dom';
import './Webpage.css';

function HomePage() {
  return (
    <div>
      <header>
      <h1 className='bar'>DEV@Deakin</h1>

        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="button">Search</button>
          <Link className="log" to="/login">Log In</Link>
        </div>

      </header>
    </div>
  );
}

export default HomePage;