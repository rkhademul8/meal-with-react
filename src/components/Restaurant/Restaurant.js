import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Restaurant = () => {

 const [searchText, setSearchText]=useState('')
 const [meals, setMeals]=useState([])
 
 useEffect(()=>{
     const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
     fetch(url)
     .then(res=>res.json())
     .then(data=>setMeals(data.meals))
 },[searchText])


    const handleSearch=(e)=>{
        const searchTextValue=e.target.value
        setSearchText(searchTextValue);
    }
    return (
        <div>
            <input             
            onChange={handleSearch}
            type="text" placeholder='Search your meals here' />
       
       <div>
           {
               meals.map(meal=><Meal meal={meal} key={meal.idMeal}></Meal>)
           }
       </div>
       
        </div>
    );
};

export default Restaurant;