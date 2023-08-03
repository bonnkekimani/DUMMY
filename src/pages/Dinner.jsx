// src/pages/Dinner.js
import { useEffect, useState } from 'react';
import MealList from '../components/MealList';
import { getDinnerMeals } from '../api';

const Dinner = () => {
  const [dinnerMeals, setDinnerMeals] = useState([]);

  useEffect(() => {
    getDinnerMeals().then((meals) => setDinnerMeals(meals));
  }, []);

  return (
    <div>
      <h2>Dinner Meals</h2>
      <MealList meals={dinnerMeals} />
    </div>
  );
};

export default Dinner;
