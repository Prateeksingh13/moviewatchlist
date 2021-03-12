import React from "react";
import { Link } from "react-router-dom";
import logo from '../logo.png';
import { Navbar } from 'react-bootstrap'

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Navbar.Brand href="/">
              <img
                src={logo}
                width="100"
                height="50"
                className="d-inline-block align-top"
                alt="YourWachlist"
              />
            </Navbar.Brand>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">Watch List</Link>
            </li>

            <li>
              <Link to="/watched">Watched</Link>
            </li>

            <li>
              <Link to="/add" className="btn btn-main">
                Search Movies
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};