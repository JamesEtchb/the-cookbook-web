import InputForm from '../components/Input'
import FoodCarousel from '../components/Carousel'
import { useState, useEffect } from 'react'
import './Personal.css'
import { Modal, Button } from 'react-bootstrap'

export default function PersonalCookbook() {
  const [showFood, setShowFood] = useState([])
  const [token, setToken] = useState('')
  //   useEffect(() => {
  //     const _token = localStorage.getItem('token')
  //     if (_token) {
  //       setToken(_token)
  //     }
  //   }, [])
  useEffect(() => {
    fetch('https://the-cookbook-api.web.app/personal')
      .then((results) => results.json())
      .then((data) => setShowFood(data))
      .catch(console.error)
  }, [setShowFood])
  if (!showFood) {
    ;<h2>No personal recipes posted</h2>
  }
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [show, setShow] = useState(false)
  return (
    <>
      <div className="personal">
        <h1>Welcome to your personal cookbook</h1>
        <h3>
          Please enjoy filling out your own recipes and enjoying them forever.
        </h3>
        <br />
        <br />
        <FoodCarousel className="personalCarousel" showFood={showFood} />
      <Button variant="primary" onClick={handleShow} className='newRecipe' >
        New Recipe
      </Button>
      <br />
      <Button variant='primary' onClick={handleShow} >
        Update recipe
      </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton >
            <Modal.Title>Add a new recipe</Modal.Title>
          </Modal.Header>
        <InputForm setShowFood={setShowFood} />
      </Modal>
    </>
    // <div>
    //     {!token ? <h1>Please Login to use your personal cookbook</h1> :
    //     <>
    // <div className="personal">
    //     <h1>Welcome to your personal cookbook</h1>
    //     <h3>Please enjoy filling out your own recipes and being sure they are safe.</h3>
    //     <FoodCarousel showFood={showFood} />
    // </div>
    //     <InputForm setShowFood={setShowFood} />
    //     </>}
    // </div>
  )
}
