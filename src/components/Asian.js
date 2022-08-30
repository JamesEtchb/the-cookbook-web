import { useEffect, useState } from 'react'
import RecipeCard from './RecipeCard'

export default function Asian() {
  const [showFood, setShowFood] = useState([])
  useEffect(() => {
    fetch('https://the-cookbook-api.web.app/asian')
      .then((results) => results.json())
      .then((data) => setShowFood(data))
      .catch(console.error)
  }, [setShowFood])
  if (!showFood) {
    ;<h2>No Asian recipe to show</h2>
  }
  return (
    <>
      <RecipeCard showFood={showFood} />  
    </>
  )
}
