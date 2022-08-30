import './App.css'

function App() {
  const addData = () => {
    const newFood = {
      name: 'Bacon omelette',
      ingredients: 'bacon, eggs, milk, cheese, salt & pepper',
      recipe:
        'Cook bacon to desired doneness. Take out and lay on a paper napkin. In a bowl mix cheese milk and eggs, season with salt and pepper and whisk. In same pan as bacon pour egg mixture, cover and let it begin to cook. After a few minutes flip omelette over and place bacon in middle. While egg is not fully cooked roll edges over bacon to shape omelette. Remove from pan and enjoy',
    }
    fetch('http://localhost:3030', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFood),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err))
    console.log('Added data')
  }

  const getData = () => {
    fetch('http://localhost:3030')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))
    console.log('getting data')
  }

  const handleDelete = () => {
    fetch('http://localhost:3030/?', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))
  }

  const handleUpdate = () => {
    const updatedFood = {}
    fetch('http://localhost:3030?', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedFood),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err))
    console.log('Added data')
  }

  return (
    <>
      <button onClick={addData}>Add data</button>
      <button onClick={getData}>Get data</button>
      <button onClick={handleDelete}>Delete data</button>
      <button onClick={handleUpdate}>Update data</button>
    </>
  )
}

export default App
