import Nav from 'react-bootstrap/Nav'

export default function Navbar() {
  return (
    <Nav variant="tabs" defaultActiveKey="/">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="./African">African</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="./Asian">Asian</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="./European">European</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="./Latin">Latin</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="./NorthAmerican">North American</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="./Personal">Personal</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}
