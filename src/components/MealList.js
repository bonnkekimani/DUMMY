// src/components/MealList.jsx
// import React from 'react';
import MealCard from './MealCard';

const MealList = ({ meals }) => {
  console.log(meals);
  return (
    <div>
      {/* {meals.map((meal) => (
        <MealCard key={meal.idMeal} meal={meal} />
      ))} */}

      <MealCard meal={meals} />
    </div>
  );
};

export default MealList;
