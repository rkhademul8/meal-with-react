import React, { useEffect, useState } from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './MealDetail.css'
const MealDetail = () => {
    const {mealId}=useParams()

    const [detail, setDetail]=useState([])
    useEffect(()=>{
        const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setDetail(data.meals[0]))
    },[])
    return (
        <div>

        <Container className='w-50'>
        <Col>
            <Card className='details'>
                {console.log(detail)}
            <h1>Meal Id:{mealId}</h1>
                <Card.Img variant="top" src={detail.strMealThumb} />
                <Card.Body>
                <Card.Title>{detail.strMeal}</Card.Title>
                <h5>strArea:{detail.strArea}</h5>
                <Card.Text>
                {detail.strInstructions?.slice(0,400)}
    
                </Card.Text>
                <a href="https://www.youtube.com/watch?v=2sX4fCgg-UI">Watch Video</a>
                </Card.Body>

                
            </Card>
            </Col>
        </Container>
           
        </div>
    );
};

export default MealDetail;