import { useEffect, useState } from 'react';
import MealList from '../components/MealList';
import MealCard from '../components/MealCard';
// import { getBreakfastMeals } from '../api';

const Breakfast = () => {
  const [breakfastMeals, setBreakfastMeals] = useState([]);

  useEffect(() => {
    fetch('db.json')
      .then(response => response.json())
      .then(data =>setBreakfastMeals(data))
      .catch(error => console.error(error));
    // getBreakfastMeals().then((meals) => setBreakfastMeals(meals));
  }, []);

  return (
    <div>
      <h2>Breakfast Meals</h2>
      {breakfastMeals.map((breakfastMeals) =>(
        <MealCard mname={breakfastMeals.meals.name} pic={breakfastMeals.meals.image} />
      ))}
      {/* <MealList meals={breakfastMeals} /> */}
    </div>
  );
};

export default Breakfast;
