import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './Meal.css'; // Certifique-se de que este arquivo existe

const Refeicao = () => {
  const [refeicao, setRefeicao] = useState({});
  const { id } = useParams();

  useEffect(() => {
    exibirRefeicao();
  }, []);

  const exibirRefeicao = async () => {
    let url;

    if (!isNaN(id)) {
      url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    } else {
      url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${id}`;
    }

    const res = await fetch(url);
    const data = await res.json();

    if (data.meals) {
      setRefeicao(data.meals[0]);
    } else {
      console.log('Refeição não encontrada');
    }
  };

  return (
    <section id='single-meal'>
      {refeicao.strMeal ? ( // Verifica se os dados da refeição existem
        <>
          <h2>{refeicao.strMeal}</h2>

          <div className='container'>
            <div className='video-container'>
              <ReactPlayer url={refeicao.strYoutube} width='100%' />
            </div>
            <div className='info'>
              <p>
                <strong>Categoria:</strong> {refeicao.strCategory}
              </p>
              <p>
                <strong>Área:</strong> {refeicao.strArea}
              </p>
              <p>
                <strong>Instruções:</strong> {refeicao.strInstructions}
              </p>
            </div>
            <div className='ingredients'>
              <h3>Ingredientes:</h3>
              <ul>
                {Object.keys(refeicao)
                  .filter((key) => key.includes('Ingredient') && refeicao[key])
                  .map((key) => (
                    <li key={key}>{refeicao[key]}</li>
                  ))}
              </ul>
            </div>
          </div>
        </>
      ) : (
        <p>Refeição não encontrada</p>
      )}
    </section>
  );
};

export default Refeicao;
