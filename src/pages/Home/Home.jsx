import React from 'react';
import Slider from 'react-slick';
import Menu from '../Menu/Menu';
import Hero from '../../components/Hero';
import './Home.css'; // Arquivo CSS para estilizar o slider

// Importando as imagens locais
import deliciasDeVerao from './img/peixes1.png';
import pratosRapidos from './img/peixes2.png';
import sobremesas from './img/peixes3.png';

// Configurações do slider
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true, // Adiciona os botões de navegação
  appendDots: (dots) => (
    <div className='dots-container'>
      <ul className='dots-list'>{dots}</ul>
    </div>
  ),
  customPaging: () => <div className='custom-dot' />,
};

const Home = () => (
  <>
    <Hero />
    <section className='slider-section'>
      <h2 className='slider-title'>Pratos de Peixe Destaque</h2>
      <Slider {...sliderSettings} className='slider'>
        <div className='slider-item'>
          <img
            src={deliciasDeVerao}
            alt='Delícias de Verão'
            className='slider-image'
          />
          <div className='slider-caption'>Delícias de Verão</div>
        </div>
        <div className='slider-item'>
          <img
            src={pratosRapidos}
            alt='Pratos Rápidos'
            className='slider-image'
          />
          <div className='slider-caption'>Pratos Rápidos e Fáceis</div>
        </div>
        <div className='slider-item'>
          <img
            src={sobremesas}
            alt='Sobremesas Irresistíveis'
            className='slider-image'
          />
          <div className='slider-caption'>Sobremesas Irresistíveis</div>
        </div>
      </Slider>
    </section>
    <Menu />
  </>
);

export default Home;
