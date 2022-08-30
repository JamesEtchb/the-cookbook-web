import { useEffect, useState } from 'react'
import RecipeCard from './RecipeCard'

export default function NorthAmerican() {
  const [showFood, setShowFood] = useState([])
  useEffect(() => {
    fetch('https://the-cookbook-api.web.app/north-american')
      .then((results) => results.json())
      .then((data) => setShowFood(data))
      .catch(console.error)
  }, [setShowFood])
  if (!showFood) {
    ;<h2>No North American recipes to show</h2>
  }
  return (
    <>
      <RecipeCard showFood={showFood} />
    </>
  )
}
