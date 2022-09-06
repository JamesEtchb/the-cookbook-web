import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Container'

export default function FoodNavbar() {
  return(
    <Navbar bg='antiquewhite' expand='lg'>
      <Container fluid>
        <Navbar.Brand href='/'>Foods of the world</Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav className='me-auto my-2 my-lg-0' style={{ maxheight: '50px'}} navbarScroll>
            <Nav.Link href='./African'>African</Nav.Link>
            <Nav.Link href='./Asian'>Asian</Nav.Link>
            <Nav.Link href='./European'>European</Nav.Link>
            <Nav.Link href='./Latin'>Latin</Nav.Link>
            <Nav.Link href='./NorthAmerican'>North American</Nav.Link>
            <Nav.Link href='./Personal'>Personal</Nav.Link>
            <Nav.Link href='./About'>About Me</Nav.Link>
          </Nav>
          {/* <Form className='d-flex'>
            <Form.Control type='search' placeholder='Search' className='me-2' aria-label='Search' />
            <Button variant='outline-success'>Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

//for future use a dropdown option for the tabs
//<NavDropdown title="Link" id="navbarScrollingDropdown">
// <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
// <NavDropdown.Item href="#action4">
//   Another action
// </NavDropdown.Item>
// <NavDropdown.Divider />
// <NavDropdown.Item href="#action5">
//   Something else here
// </NavDropdown.Item>
// </NavDropdown>


