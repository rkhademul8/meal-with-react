import React from 'react';

const Meal = (props) => {
    console.log(props.meal);
    const {strMeal,strMealThumb,strInstructions}=props.meal
    return (
        <div>
            <img src={strMealThumb} alt="" />
            <h3>Name:{strMeal}</h3>
            <p>Instruction:{strInstructions.slice(0,150)}</p>
        </div>
    );
};

export default Meal;