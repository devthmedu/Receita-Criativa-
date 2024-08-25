import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css'; // Certifique-se de criar e importar o arquivo CSS

const Hero = () => {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      navigate(`/meal/${text.trim()}`);
      setText('');
    }
  };

  return (
    <div id='hero'>
      <div className='hero-overlay'>
        <div className='hero-content'>
          <h1 className='hero-title'>Descubra Receitas Deliciosas</h1>
          <form id='myform' onSubmit={handleSubmit} className='search-form'>
            <input
              type='text'
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder='Buscar receitas...'
              aria-label='Buscar receitas'
              className='search-input'
            />
            <button type='submit' aria-label='Buscar' className='search-button'>
              <i className='ri-search-line'></i>
              <span className='sr-only'>Buscar</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
