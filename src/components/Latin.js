import { useEffect } from 'react'

export default function Latin({ showLatin, setShowLatin }) {
    const getData = () => {
        fetch('http://localhost:3030/latin')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))
        console.log('getting data')
      }
  return (
    <ul>
      {showLatin.map(
        (latin) => (
          (<li key={latin.id}>{latin.name}</li>),
          (<li key={latin.id}>{latin.ingredients}</li>),
          (<li key={latin.id}>{latin.recipe}</li>)
        )
      )}
    </ul>
  )
}
