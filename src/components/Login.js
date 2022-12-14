import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'

export default function Login({ setToken, setIsUser, loginShow }) {
  const handleLogin = ({ email, password }) => {
    fetch('https://the-cookbook-web.web.app/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        setToken(data.token)
        localStorage.setItem('token', data.token)
      })
      .catch((err) => alert(err.message))
  }
  return (
    <Modal {...loginShow} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onFinish={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Password" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Button onClick={loginShow.hide}>Close</Button>
      <Button onClick={() => setIsUser(false)} type={'link'}>
        Sign Up
      </Button>
    </Modal>
  )
}
