import { useEffect, useState } from 'react'

export default function Latin() {
  const [showLatin, setShowLatin] = useState([])
    useEffect(() => {
      fetch('https://the-cookbook-api.web.app/latin')
        .then((results) => results.json())
        .then((data) => setShowLatin(data))
        .catch(console.error)
    }, [setShowLatin])
    if (!showLatin) {
      ;<h2>No Latin recipes to show</h2>
    }
    return (
      <>
        {showLatin.map(data => {
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