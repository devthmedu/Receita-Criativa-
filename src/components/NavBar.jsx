import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '/logo.svg'; // Ajuste o caminho conforme a estrutura do seu projeto

const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <img src={logo} alt='Logo da Cozinha Criativa' className='logo-img' />
        <h2 className='logo-text'>Receitas Criativa</h2>
      </div>
      <ul className='nav-links'>
        <li>
          <Link to='/' className='nav-link'>
            Início
          </Link>
        </li>
        <li>
          <Link to='/receitas' className='nav-link'>
            Receitas
          </Link>
        </li>
        <li>
          <Link to='/sobre' className='nav-link'>
            Sobre
          </Link>
        </li>
        <li>
          <Link to='/contato' className='nav-link'>
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
