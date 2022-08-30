import { useEffect } from 'react'

export default function NorthAmerican({
  showNorthAmerican,
  setShowNorthAmerican,
}) {
  useEffect(() => {
    fetch('north america link goes here')
      .then((results) => results.json())
      .then((northAmerican) => setShowNorthAmerican(northAmerican))
      .catch(console.error)
  }, [setShowNorthAmerican])
  if (!showNorthAmerican) {
    ;<h2>No North American recipes to show</h2>
  }
  return (
    <ul>
      {showNorthAmerican(
        (northAmerican) => (
          (<li key={northAmerican.id}>{northAmerican.name}</li>),
          (<li key={northAmerican.id}>{northAmerican.ingredients}</li>),
          (<li key={northAmerican.id}>{northAmerican.recipe}</li>)
        )
      )}
    </ul>
  )
}
