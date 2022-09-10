import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
      <div className='footer'>
        <h4>ⓒ Created by James Etchberger 2022</h4>
        <a
          className="logo"
          href="https://www.linkedin.com/in/james-etchberger-232495245/"
        >
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </a>
        <a className="logo" href="https://github.com/JamesEtchb">
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </a>
      </div>
  )
}
