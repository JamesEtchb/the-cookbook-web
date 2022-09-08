import { useEffect, useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import logo from '../resources/sidewayslogo.png'
import Login from './Login'
import Signup from './Signup'
import './Header.css'

function SignupModal() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const handleSignUp = ({ email, password }) => {
    fetch('https://the-cookbook-web.web.app/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        // setToken(data.token)
        localStorage.setItem('token', data.token)
      })
      .catch((err) => alert(err.message))
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Signup
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Signup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onFinish={handleSignUp}>
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
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSignUp}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

function LoginModal() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
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
        // setToken(data.token)
        localStorage.setItem('token', data.token)
      })
      .catch((err) => alert(err.message))
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
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
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleLogin}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default function Header() {
  const [token, setToken] = useState()
  const [isUser, setIsUser] = useState()
  const [loginShow, setLoginShow] = useState(false)
  const [signupShow, setSignupShow] = useState(false)
  useEffect(() => {
    if (localStorage.getItem('token')) {
      setToken(localStorage.get('token'))
    }
  }, [setToken])
  function formSubmit(e) {
    console.log('power')
    e.preventDefault()
  }
  return (
    <div className="header">
      <img
        className="headerLogo"
        src={logo}
        alt="The cookbook logo. Where all your recipes live"
      />
      <div>
        <form onSubmit={formSubmit}>
          <SignupModal className='headerButton' />
          <LoginModal className='headerButton' />
          {/* <Button className="headerButton" onClick={() => setSignupShow(true)}>
            Sign in
          </Button>
          <Button className="headerButton" onClick={() => setLoginShow(true)}>
            Login
          </Button> */}
          <Login
            setToken={setToken}
            setIsUser={setIsUser}
            loginShow={loginShow}
            show={loginShow}
            onHide={() => setLoginShow(false)}
          />
          <Signup
            setToken={setToken}
            setIsUser={setIsUser}
            signupShow={signupShow}
            show={signupShow}
            onHide={() => setSignupShow(false)}
          />
        </form>
      </div>
    </div>
  )
}
