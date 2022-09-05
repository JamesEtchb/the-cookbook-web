import Card from 'react-bootstrap/Card'
import React from 'react'

export default function RecipeCard({ data }) {
  console.log({data})
  return (
    <Card>
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Subtitle>{data.ingredients}</Card.Subtitle>
        <Card.Text>{data.recipe}</Card.Text>
      </Card.Body>
    </Card>
  )
}
