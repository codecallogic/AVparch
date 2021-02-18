import {useState} from 'react'
import { useRouter } from 'next/router'

const Footer = ({}) => {

  const router = useRouter()

  const [active, setActive] = useState('home')

  const runNav = (e) => {
    if(e.target.textContent.toLowerCase() == 'home') router.push('/')
    if(e.target.textContent.toLowerCase() == 'architectural design') router.push('/project-page')
    if(e.target.textContent.toLowerCase() == 'studio art') router.push('/artwork')
    if(e.target.textContent.toLowerCase() == 'services') router.push('/services')
    if(e.target.textContent.toLowerCase() == 'contact') router.push('/contact')
    setActive(e.target.textContent.toLowerCase())
  }
  
  return (
    <div className="footer">
      <div className="footer-nav">
        <div className="footer-nav-menu-container">
          <div className="footer-nav-menu">
              <a className={`footer-nav-menu-link ` + (active == 'home' ? 'active-footer': null)} onClick={runNav}>Home</a>
              <a className="footer-nav-menu-link-dropdown">Projects
                <ul className="footer-nav-menu-dropdown">
                  <li className="footer-nav-menu-link-dropdown-sub"><a onClick={runNav}>Studio Art</a></li>
                  <li className="footer-nav-menu-link-dropdown-sub"><a onClick={runNav}>Architectural Design</a></li>
                </ul>
              </a>
              <a className={`footer-nav-menu-link ` + (active == 'services' ? 'active-footer': null)} onClick={runNav}>Services</a>
              <a className={`footer-nav-menu-link ` + (active == 'contact' ? 'active-footer': null)} onClick={runNav}>Contact</a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">&copy; by AVP Architecture | All Rights Reserved</div>
    </div>
  )
}

export default Footer
