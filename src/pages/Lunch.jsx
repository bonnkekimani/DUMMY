// src/pages/Lunch.js
import { useEffect, useState } from 'react';
import MealList from '../components/MealList';
import { getLunchMeals } from '../api';

const Lunch = () => {
  const [lunchMeals, setLunchMeals] = useState([]);

  useEffect(() => {
    getLunchMeals().then((meals) => setLunchMeals(meals));
  }, []);

  return (
    <div>
      <h2>Lunch Meals</h2>
      <MealList meals={lunchMeals} />
    </div>
  );
};

export default Lunch;
