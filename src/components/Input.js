import { Button, Form } from 'react-bootstrap'
import { useState, useEffect } from 'react'

export default function InputForm({setShowFood}) {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [form, setForm] = useState({})

  useEffect(() => {}, [form])

  async function formSubmit(e) {
    e.preventDefault()
    try {
      const results = await fetch('https://the-cookbook-api.web.app/personal', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(form),
      })
      const data = results.json()
      setFormSubmitted(true)
      setErrorMessage('')
      console.log(data)
    //   setShowFood(await results.json())
    } catch (error) {
      console.error(error)
      setErrorMessage('There was an error submitting form' + error.toString())
    }
    
  }
  const updateName = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }
  const updateIngredients = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }
  const updateRecipe = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }
  console.log(form)

  return (
    <Form>
      <Form.Group className="mb-3" onSubmit={formSubmit}>
        <Form.Label>Recipe Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Recipe Name"
          name="name"
          onChange={updateName}
          value={form.name}
        />
        <Form.Label>Ingredients</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingredients"
          name="ingredients"
          onChange={updateIngredients}
          value={form.ingredients}
        />
        <Form.Label>Recipe</Form.Label>
        <Form.Control
          type="text"
          placeholder="Recipe"
          name="recipe"
          onChange={updateRecipe}
          value={form.recipe}
        />
        {!formSubmitted && (
          <Button variant="primary" type="submit" onClick={formSubmit}>
            Submit
          </Button>
        )}
        {errorMessage && (
          <h1>
            There was an error:
            <br />
            {errorMessage}
          </h1>
        )}
      </Form.Group>
    </Form>
  )
}
