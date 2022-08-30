import { useEffect, useState } from 'react'

export default function NorthAmerican() {
  const [showNorthAmerican, setShowNorthAmerican] = useState([])
  useEffect(() => {
    fetch('https://the-cookbook-api.web.app/north-american')
      .then((results) => results.json())
      .then((data) => setShowNorthAmerican(data))
      .catch(console.error)
  }, [setShowNorthAmerican])
  if (!showNorthAmerican) {
    ;<h2>No North American recipes to show</h2>
  }
  return (
    <>
      {showNorthAmerican.map(data => {
        return(
          <ul key={data._id}>
            <li>{data.name}</li>
            <li>{data.ingredients}</li>
            <li>{data.recipe}</li>
          </ul>
        )
      })}
    </>
  )
}
