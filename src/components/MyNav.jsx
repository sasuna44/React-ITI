import React from 'react';
import '../css/header.css'; 
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function MyNav() {
  return (
    <div className="header__nav-container">
      <nav className="header__menu">
        <ul className="header__menu-list">
          <li className="header__menu-item">
            <NavLink activeClassName="text-danger" className="header__menu-item" to="/">
              Home
            </NavLink>
          </li>
          <li className="header__menu-item">
            <NavLink activeClassName="text-danger" className="header__menu-item" to="/clothes">
              Clothes
            </NavLink>
          </li>
          <li className="header__menu-item">
            <NavLink activeClassName="text-danger" className="header__menu-item" to="/about">
              About
            </NavLink>
          </li>
          <li className="header__menu-item">
            <NavLink activeClassName="text-danger" className="header__menu-item" to="/contact">
              Contact
            </NavLink>
          </li>
          <li className="header__menu-item">
            <NavLink activeClassName="text-danger" className="header__menu-item" to="/counter">
              Counter 
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
