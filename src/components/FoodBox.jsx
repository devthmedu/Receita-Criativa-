import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FoodBox.css';

const FoodBox = ({ category }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  // Funções para lidar com o estado de hover
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // Verifica se a categoria está definida antes de tentar acessar suas propriedades
  if (!category) {
    return <div className='food-box'>Categoria não encontrada</div>;
  }

  return (
    <div
      className={`food-box ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => navigate(`/category/${category.strCategory}`)}
      role='button'
      tabIndex={0}
      aria-label={`Navegar para a categoria ${category.strCategory}`}
      aria-roledescription='link'
    >
      <img
        src={category.strCategoryThumb}
        alt={`Imagem da categoria ${category.strCategory}`}
        loading='lazy'
        aria-hidden='true'
      />
      {isHovered && <p className='category-text'>{category.strCategory}</p>}
    </div>
  );
};

export default FoodBox;
