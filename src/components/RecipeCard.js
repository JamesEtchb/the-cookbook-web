import Card from 'react-bootstrap/Card'
import React from 'react'
import './Carousel.css'

export default function RecipeCard({ data }) {
  console.log({ data })
  return (
    <div className='cardBackground'>
      <Card className="cardContainer">
        <Card.Body>
          <Card.Title>
            <h1>{data.name}</h1>
          </Card.Title>
          <Card.Subtitle>
            <h2>{data.ingredients}</h2>
          </Card.Subtitle>
          <Card.Text>
            <h2>{data.recipe}</h2>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}
