import React , { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleBrandClick = () => {
      navigate('/');
    };

    const navbarCollapseRef = useRef(null);

    const handleLinkClick = () => {
        navbarCollapseRef.current.classList.remove('show');
      };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="navbar-brand" onClick={handleBrandClick} style={{ cursor: 'pointer' }}>
          LoginMate
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav" ref={navbarCollapseRef}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/login" onClick={handleLinkClick}>Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Singin" onClick={handleLinkClick}>Singin</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;