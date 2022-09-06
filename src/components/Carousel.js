import Carousel from 'react-bootstrap/Carousel'
import React from 'react'
import RecipeCard from './RecipeCard'
import './Carousel.css'

export default function FoodCarousel({ showFood }) {
  return (
    <div className='recipeContainer'>
      <Carousel
        className="container"
        variant="dark"
        slide={false}
        interval={null}
      >
        {showFood.map((data) => (
          <Carousel.Item key={data.id} className="card">
            <div>
              <RecipeCard data={data} />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}
