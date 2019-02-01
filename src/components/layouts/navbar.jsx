import React from 'react'
import {Navbar} from 'react-materialize'
import {NavLink, Link} from 'react-router-dom';
var NavBar = () => {
  return (
    <Navbar>
      <div className="container">
        <Link className="brand-Logo left" to="/">URBANRIDER</Link>
        <ul className="right">
          <li>
            <NavLink to="pageone">PageOne</NavLink>
          </li>
          <li>
            <NavLink to="pagetwo">PageTwo</NavLink>
          </li>
          <li>
            <NavLink to="cart">Cart</NavLink>
          </li>
        </ul>
      </div>
    </Navbar>
  );
}
export default NavBar;