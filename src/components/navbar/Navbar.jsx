import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';

function Navbar() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    performSearch(event.target.value);
  };

  const performSearch = (query) => {
    // Implement your search logic here
    console.log('Searching for:', query);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">FlavorFusion</Link> {/* Use Link instead of anchor tag */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">Pakistani</Link> {/* Use Link for Home */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/chinese">Chinese</Link> {/* Example link to About page */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/thai">Thai</Link> {/* Example link to About page */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/italian">Italian</Link> {/* Example link to About page */}
            </li>
        
          </ul>
          <form className="d-flex ms-auto" role="search" onSubmit={(e) => e.preventDefault()}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
