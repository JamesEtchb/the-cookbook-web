import { useEffect, useState } from 'react'
import RecipeCard from '../components/RecipeCard'

export default function African() {
  const [showFood, setShowFood] = useState([])
  useEffect(() => {
    fetch('https://the-cookbook-api.web.app/african')
      .then((results) => results.json())
      .then((data) => setShowFood(data))
      .catch(console.error)
  }, [setShowFood])
  if (!showFood) {
    ;<h2>No African recipes to show</h2>
  }
  return (
    <>
      <RecipeCard showFood={showFood}  />
    </>
  )
}
