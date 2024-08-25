import React, { useEffect, useState } from 'react';
import FoodBox from '../../components/FoodBox';
import './Menu.css';

const Menu = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Função para buscar categorias
  const displayFood = async () => {
    setLoading(true); // Inicia o carregamento
    setError(null); // Limpa erros anteriores
    try {
      const res = await fetch(
        'https://www.themealdb.com/api/json/v1/1/categories.php',
      );
      if (!res.ok) throw new Error('Falha ao buscar categorias');
      const data = await res.json();
      setCategories(data.categories || []); // Garantir que seja um array
    } catch (error) {
      setError('Ocorreu um erro ao buscar as categorias.');
      console.error('Erro ao buscar categorias:', error);
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  };

  useEffect(() => {
    displayFood();
  }, []);

  return (
    <section id='menu'>
      <div className='header'>
        <h2>Menu de Categorias</h2>
      </div>
      {loading ? (
        <p className='loading'>Carregando categorias...</p>
      ) : error ? (
        <p className='error'>{error}</p>
      ) : (
        <div id='categoryContainer'>
          {categories.length > 0 ? (
            categories.map((category) => (
              <FoodBox key={category.idCategory} category={category} />
            ))
          ) : (
            <p className='no-categories'>Nenhuma categoria encontrada.</p>
          )}
        </div>
      )}
    </section>
  );
};

export default Menu;
