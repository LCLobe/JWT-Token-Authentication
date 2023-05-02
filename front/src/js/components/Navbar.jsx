import React , { useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAppContext from '../context/Context.js';

const Navbar = () => {

    const {store, actions} = useAppContext();
    const {userIsLoggedIn, token} = store;
    const {setToken, setUserIsLoggedIn} = actions;
  

    useEffect(() => {
      console.log(userIsLoggedIn);
    }, [token]);

    const navigate = useNavigate();

    const handleBrandClick = () => {
      navigate('/');
      navbarCollapseRef.current.classList.remove('show');
    };

    const navbarCollapseRef = useRef(null);

    const handleLinkClick = () => {
        navbarCollapseRef.current.classList.remove('show');
      };
    
    const handleLogOutClick = () => {
      handleLinkClick();
      //Remove user token
      localStorage.removeItem("jwt-token");
      setToken(null);
      //setUserIsLoggedIn(false);

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
              {userIsLoggedIn
              ? <Link className="nav-link" to="/" onClick={handleLogOutClick}>Log out</Link>
              : <Link className="nav-link" to="/login" onClick={handleLinkClick}>Log in</Link> }
              
            </li>
            <li className="nav-item">
              {userIsLoggedIn
              ? <Link className="nav-link" to="/dashboard" onClick={handleLinkClick}>Dashboard</Link>
              : <Link className="nav-link" to="/Singin" onClick={handleLinkClick}>Singin</Link>
              }
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;