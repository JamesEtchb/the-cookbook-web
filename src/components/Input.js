import { Button } from 'bootstrap'
import { useState, useEffect } from 'react'

export default function Input () {
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [form, setForm] = useState({})

    useEffect(() => {}, [form])
    async function formSubmit(e) {
        e.preventDefault()
        try {
            const results = await fetch('need to figure out what link to use', {
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
        } catch (error) {
            console.error(error)
            setErrorMessage('There was an error submitting form' + error.toString())
        }
    }
    const updateName = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }
    const updateIngredients = (event) => {
        setForm({ ...form, [event.target.ingredients]: event.target.value })
    }
    const updateRecipe = (event) => {
        setForm({ ...form, [event.target.recipe]: event.target.value })
    }
    console.log(form)

    return (
        <div>
            <form onSubmit={formSubmit}>
                <label>Recipe Name</label>
                <input type="text" name='name' placeholder='Recipe Name' onChange={updateName} value={form.name} />
                <label>Ingredients list</label>
                <input type="text" name='ingredients' placeholder='Ingredients' onChange={updateIngredients} value={form.ingredients} />
                <label>Recipe</label>
                <input type="text" name='recipe' placeholder='Recipe' onChange={updateRecipe} value={form.recipe} />
                {!formSubmitted && <Button>Submit Form</Button>}
                {errorMessage && (
                    <h1>
                        There was an error: <br />
                        {errorMessage}
                    </h1>
                )}
            </form>
        </div>
    )
}