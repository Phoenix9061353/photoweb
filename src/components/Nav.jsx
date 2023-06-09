/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-globals */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();

  const handleNav = (e) => {
    let target = e.target.closest('.link');

    if (target.id === 'home') {
      navigate('/photoweb');
    } else if (target.id === 'about') {
      navigate('/about');
    }
  };

  return (
    <nav>
      <ul>
        <li
          className={`link ${
            location.hash === '' || location.hash === '#/photoweb'
              ? 'active'
              : ''
          }`}
          id='home'
          onClick={handleNav}
        >
          <Link to='/'>Home</Link>
        </li>
        <li
          className={`link ${location.hash === '#/about' ? 'active' : ''}`}
          id='about'
          onClick={handleNav}
        >
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
