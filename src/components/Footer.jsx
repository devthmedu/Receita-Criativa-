import React from 'react';
import './Footer.css'; // Certifique-se de criar e importar o arquivo CSS para o Footer

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <section className='footer-links'>
          <ul>
            <li>
              <a href='/'>Início</a>
            </li>
            <li>
              <a href='/receitas'>Receitas</a>
            </li>
            <li>
              <a href='/sobre'>Sobre</a>
            </li>
            <li>
              <a href='/contato'>Contato</a>
            </li>
          </ul>
        </section>
        <section className='footer-info'>
          <p>
            &copy; {new Date().getFullYear()} Cozinha Criativa. Todos os
            direitos reservados.
          </p>
        </section>
        <section className='footer-social'>
          <a
            href='https://facebook.com'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Facebook'
          >
            <i className='fab fa-facebook-f'></i>
          </a>
          <a
            href='https://twitter.com'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Twitter'
          >
            <i className='fab fa-twitter'></i>
          </a>
          <a
            href='https://instagram.com'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Instagram'
          >
            <i className='fab fa-instagram'></i>
          </a>
          <a
            href='https://linkedin.com'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
          >
            <i className='fab fa-linkedin-in'></i>
          </a>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
