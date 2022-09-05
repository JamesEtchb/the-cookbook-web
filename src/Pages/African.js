import { useEffect, useState } from 'react'
import FoodCarousel from '../components/Carousel'
import './Chefs.css'

export default function African() {
  const [showFood, setShowFood] = useState([])
  useEffect(() => {
    fetch('https://the-cookbook-api.web.app/african')
      .then((results) => results.json())
      .then((data) => setShowFood(data))
      .catch(console.error)
  }, [setShowFood])
  if (!showFood) {
    <h2>No African recipes to show</h2>
  }
  return (
    <div className='chefspage'>
      <h1>Here are some recipes from <br /> African Countries.</h1>
      <h3>Please enjoy and try some for yourself.</h3>
      <FoodCarousel showFood={showFood}  />
    </div>
  )
}
