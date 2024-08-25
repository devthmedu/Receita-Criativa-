// App.jsx
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

// Componentes de páginas
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Category from './pages/Category/Category';
import Meal from './pages/SingleMeal/Meal';

// Componentes de layout
import NavBar from './components/NavBar'; // Certifique-se de que o nome está correto
import Footer from './components/Footer';

// React Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/category/:category' element={<Category />} />
          <Route path='/meal/:id' element={<Meal />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
