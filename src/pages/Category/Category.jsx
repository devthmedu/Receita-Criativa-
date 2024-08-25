import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MealBox from '../../components/MealBox';
import './Category.css';

const Category = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { category } = useParams();
  const navigate = useNavigate(); // Hook para navegação

  useEffect(() => {
    fetchCategoryMeals();
  }, [category]); // Adiciona `category` como dependência para refazer o fetch quando mudar

  const fetchCategoryMeals = async () => {
    setLoading(true); // Define o estado de carregamento
    setError(null); // Limpa o erro anterior
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
      );
      if (!response.ok) throw new Error('Falha ao buscar dados');
      const data = await response.json();
      setMeals(data.meals || []); // Adiciona verificação para evitar erros caso não haja dados
    } catch (error) {
      setError('Ocorreu um erro ao buscar as refeições.'); // Mensagem de erro
    } finally {
      setLoading(false); // Define o estado de carregamento como falso
    }
  };

  return (
    <section id='meals'>
      <div className='header'>
        <button className='back-button' onClick={() => navigate(-1)}>
          <i className='fas fa-arrow-left'></i> Voltar
        </button>
        <h2 className='category-title'>{category}</h2>
      </div>
      {loading ? (
        <p className='loading'>Carregando...</p> // Mensagem de carregamento
      ) : error ? (
        <p className='error'>{error}</p> // Mensagem de erro
      ) : (
        <div id='mealContainer'>
          {meals.length > 0 ? (
            meals.map((meal) => <MealBox key={meal.idMeal} meal={meal} />)
          ) : (
            <p className='no-meals'>
              Nenhuma refeição encontrada para esta categoria.
            </p>
          )}
        </div>
      )}
    </section>
  );
};

export default Category;
