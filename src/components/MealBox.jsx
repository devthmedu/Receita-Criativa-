import React from 'react';
import { Link } from 'react-router-dom';
import './MelBox.css'; // Inclua seu arquivo CSS

const MealBox = ({ meal }) => {
  return (
    <div className='meal-box'>
      <img
        src={meal.strMealThumb}
        alt={`Thumbnail of ${meal.strMeal}`} // Texto alternativo mais descritivo
        loading='lazy'
        className='meal-img'
      />
      <p className='meal-title'>
        {meal.strMeal.length > 25
          ? `${meal.strMeal.slice(0, 25)}...`
          : meal.strMeal}
      </p>
      <Link
        to={`/meal/${meal.idMeal}`}
        className='view-details'
        aria-label={`View details of ${meal.strMeal}`}
      >
        <i className='ri-arrow-right-up-line'></i>
      </Link>
    </div>
  );
};

export default MealBox;
