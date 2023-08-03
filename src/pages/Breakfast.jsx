import { useEffect, useState } from 'react';
import MealList from '../components/MealList';
import { getBreakfastMeals } from '../api';

const Breakfast = () => {
  const [breakfastMeals, setBreakfastMeals] = useState([]);

  useEffect(() => {
    getBreakfastMeals().then((meals) => setBreakfastMeals(meals));
  }, []);

  return (
    <div>
      <h2>Breakfast Meals</h2>
      <MealList meals={breakfastMeals} />
    </div>
  );
};

export default Breakfast;
