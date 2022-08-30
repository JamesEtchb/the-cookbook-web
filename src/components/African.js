import { useEffect, useState } from 'react'

export default function African() {
  const [showAfrican, setShowAfrican] = useState([])
  useEffect(() => {
    fetch('https://the-cookbook-api.web.app/african')
      .then((results) => results.json())
      .then((data) => setShowAfrican(data))
      .catch(console.error)
  }, [setShowAfrican])
  if (!showAfrican) {
    ;<h2>No African recipes to show</h2>
  }
  return (
    <body>
      {showAfrican.map(data => {
        return(
          <ul key={data._id} className='recipes'>
            <li className='recipes'>{data.name}</li>
            <li className='recipes'>{data.ingredients}</li>
            <li className='recipes'>{data.recipe}</li>
          </ul>
        )
      })}
    </body>
  )
}
