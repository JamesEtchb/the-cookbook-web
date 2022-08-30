import { useEffect, useState } from 'react'

export default function Asian() {
  const [showEuropean, setShowEuropean] = useState([])
  useEffect(() => {
    fetch('https://the-cookbook-api.web.app/european')
      .then((results) => results.json())
      .then((data) => setShowEuropean(data))
      .catch(console.error)
  }, [setShowEuropean])
  if (!showEuropean) {
    ;<h2>No European recipe to show</h2>
  }
  return (
    <>
      {showEuropean.map(data => {
          return (
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
