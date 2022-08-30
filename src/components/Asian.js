import { useEffect, useState } from 'react'

export default function Asian() {
  const [showAsian, setShowAsian] = useState([])
  useEffect(() => {
    fetch('https://the-cookbook-api.web.app/asian')
      .then((results) => results.json())
      .then((data) => setShowAsian(data))
      .catch(console.error)
  }, [setShowAsian])
  if (!showAsian) {
    ;<h2>No Asian recipe to show</h2>
  }
  return (
    <>
      {showAsian.map(data => {
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
