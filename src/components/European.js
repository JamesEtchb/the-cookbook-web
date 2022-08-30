import { useEffect } from 'react'

export default function European({ showEuropean, setShowEuropean }) {
  useEffect(() => {
    fetch('european url goes here')
      .then((results) => results.json)
      .then((european) => setShowEuropean(european))
      .catch(console.error)
  }, [setShowEuropean])
  if (!showEuropean) {
    ;<h2>No European recipes to show</h2>
  }
  return (
    <ul>
      {showEuropean(
        (european) => (
          (<li key={european.id}>{european.name}</li>),
          (<li key={european.id}>{european.ingredients}</li>),
          (<li key={european.id}>{european.recipe}</li>)
        )
      )}
    </ul>
  )
}
