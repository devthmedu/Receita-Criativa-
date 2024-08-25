import React from 'react';
import Slider from 'react-slick';
import Menu from '../Menu/Menu';
import Hero from '../../components/Hero';
import './Home.css'; // Arquivo CSS para estilizar o slider

// Importando as imagens locais
import deliciasDeVerao from './img/peixes1.png';
import pratosRapidos from './img/peixes2.png';
import sobremesas from './img/cordeiro.png';
import saladas1 from './img/salada1.png';
import saladas2 from './img/salada2.png';
import saladas3 from './img/salada3.png';
import sobremesa1 from './img/sobremesas1.png';
import sobremesa2 from './img/sobremesas2.png';
import sobremesa3 from './img/sobremesas3.png';

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
    <main className='main-content'>
      <section className='slider-section'>
        <h2 className='slider-title'>Destaque</h2>
        <Slider {...sliderSettings} className='slider'>
          {/* Imagens de Peixes */}
          <div className='slider-item'>
            <img
              src={deliciasDeVerao}
              alt='Delícias com Salmão'
              className='slider-image'
            />
            <div className='slider-caption'>Delícias com Salmão</div>
          </div>
          <div className='slider-item'>
            <img
              src={pratosRapidos}
              alt='Pratos Rápidos e Fáceis'
              className='slider-image'
            />
            <div className='slider-caption'>Pratos Rápidos e Fáceis</div>
          </div>
          <div className='slider-item'>
            <img
              src={sobremesas}
              alt='Cordeiro Grelhado'
              className='slider-image'
            />
            <div className='slider-caption'>Cordeiro Grelhado</div>
          </div>

          {/* Imagens de Saladas */}
          <div className='slider-item'>
            <img
              src={saladas1}
              alt='Salada Colorida'
              className='slider-image'
            />
            <div className='slider-caption'>Salada Colorida</div>
          </div>
          <div className='slider-item'>
            <img src={saladas2} alt='Salada Fresca' className='slider-image' />
            <div className='slider-caption'>Salada Fresca</div>
          </div>
          <div className='slider-item'>
            <img
              src={saladas3}
              alt='Salada Nutritiva'
              className='slider-image'
            />
            <div className='slider-caption'>Salada Nutritiva</div>
          </div>

          {/* Imagens de Sobremesas */}
          <div className='slider-item'>
            <img
              src={sobremesa1}
              alt='Waffles com Calda'
              className='slider-image'
            />
            <div className='slider-caption'>Waffles com Calda</div>
          </div>
          <div className='slider-item'>
            <img
              src={sobremesa2}
              alt='Sorvete de Banana Split'
              className='slider-image'
            />
            <div className='slider-caption'>Sorvete de Banana Split</div>
          </div>
          <div className='slider-item'>
            <img
              src={sobremesa3}
              alt='Panna Cotta com Calda de Frutas'
              className='slider-image'
            />
            <div className='slider-caption'>
              Panna Cotta com Calda de Frutas
            </div>
          </div>
        </Slider>
      </section>
    </main>
    <Menu />
  </>
);

export default Home;
