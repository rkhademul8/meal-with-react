import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Meal = (props) => {
    console.log(props.meal);
    const {strMeal,strMealThumb,strInstructions}=props.meal
    return (
        <div>
            <Col>
            <Card>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                <Card.Title>{strMeal}</Card.Title>
                <Card.Text>
                {strInstructions.slice(0,100)}....
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
        </div>
    );
};

export default Meal;