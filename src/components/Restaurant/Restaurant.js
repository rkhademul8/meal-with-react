import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Meal from '../Meal/Meal';
import './Restaurant.css'
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
       
     
            <Container>
            <Row xs={1} md={3} className="g-4">
                    {
                     meals.map(meal=><Meal meal={meal} key={meal.idMeal}></Meal>)
                     }
                </Row>
            </Container>
               
      
       
        </div>
    );
};

export default Restaurant;