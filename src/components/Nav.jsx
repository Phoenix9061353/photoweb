/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
  const [page, setPage] = useState('home');
  const navigate = useNavigate();
  const toggle = (idRemove, idAdd, idPage = '') => {
    document.querySelector(`#${idRemove}`).classList.remove('active');
    document.querySelector(`#${idAdd}`).classList.add('active');
    if (idPage !== '') {
      setPage(idPage);
    }
  };
  const handleNav = (e) => {
    let target = e.target.closest('.link');

    setPage(target.id);
    if (page) {
      document.querySelector(`#${page}`).classList.remove('active');
    }
    document.querySelector(`#${target.id}`).classList.add('active');
    if (target.id === 'home') {
      navigate('/photoweb');
    } else if (target.id === 'about') {
      navigate('/about');
    }
  };
  useEffect(() => {
    if (location.hash === '#/about') {
      toggle('home', 'about', 'about');
    } else {
      toggle('about', 'home', 'home');
    }
  }, []);
  return (
    <nav>
      <ul>
        <li className='link active' id='home' onClick={handleNav}>
          <Link to='/'>Home</Link>
        </li>
        <li className='link' id='about' onClick={handleNav}>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
