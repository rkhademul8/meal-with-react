import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Meal.css'
const Meal = (props) => {
   
    const {idMeal,strMeal,strMealThumb,strInstructions}=props.meal
    return (
        <div>
            <Col>
            <Card className='meal'>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                <Card.Title>{strMeal}</Card.Title>
                <Card.Text>
                {strInstructions.slice(0,100)}....
                </Card.Text>
                </Card.Body>

                <Link to={`/mealdetail/${idMeal}`}>Mores Details</Link>
            </Card>
            </Col>
        </div>
    );
};

export default Meal;