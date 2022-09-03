import logo from '../resources/sidewayslogo.png'
import './Header.css'
import { Button } from 'react-bootstrap'

export default function Header() {
  return (
    <div className="header">
      <img
        className="headerLogo"
        src={logo}
        alt="The cookbook logo. Where all your recipes live"
      />
      <div>
        <Button className="headerButton">Sign in</Button>
        <Button className="headerButton">Login</Button>
      </div>
    </div>
  )
}
