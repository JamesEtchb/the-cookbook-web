import { useEffect } from 'react'

export default function African({ showAfrican, setShowAfrican }) {
  useEffect(() => {
    fetch('african url goes here')
      .then((results) => results.json())
      .then((european) => setShowAfrican(european))
      .catch(console.error)
  }, [setShowAfrican])
  if (!showAfrican) {
    ;<h2>No European recipes to show</h2>
  }
  return (
    <ul>
      {showAfrican(
        (african) => (
          (<li key={european.id}>{european.name}</li>),
          (<li key={european.id}>{european.ingredients}</li>),
          (<li key={european.id}>{european.recipe}</li>)
        )
      )}
    </ul>
  )
}
