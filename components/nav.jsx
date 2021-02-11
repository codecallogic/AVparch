import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Nav = ({}) => {

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
  
  useEffect( () => {
    if(router.pathname.substr(1,) == 'project-page') setActive('architectural design');
    if(router.pathname.substr(1,) == 'artwork') setActive('studio art');
    if(router.pathname.substr(1,) == 'services') setActive('services');
    if(router.pathname.substr(1,) == 'contact') setActive('contact');
    if(router.query.id) setActive('project')
  }, [])
  
  return (
    <div className="nav">
      {active !== 'home' && active !== 'about' && active !== 'cv'? <div className="nav-current-container">
        <div className="nav-current"><span></span>{active}</div>
      </div>
      : null }
      <div className="nav-container">
        <div className="nav-menu">
          <div className="nav-menu-container">
            <a className={`nav-menu-link ` + (active == 'home' ? 'active': null)} onClick={runNav}>Home</a>
            <a className="nav-menu-link-dropdown">Projects
              <ul className="nav-menu-dropdown">
                <li className="nav-menu-link-dropdown-sub"><a onClick={runNav}>Architectural Design</a></li>
                <li className="nav-menu-link-dropdown-sub"><a onClick={runNav}>Studio Art</a></li>
              </ul>
            </a>
            <a className={`nav-menu-link ` + (active == 'services' ? 'active': null)} onClick={runNav}>Services</a>
            <a className={`nav-menu-link ` + (active == 'contact' ? 'active': null)} onClick={runNav}>Contact</a>
          </div>
        </div>
        <div className="nav-mobile">
          <div className="nav-mobile-container">
            <div></div>
            <div className="nav-mobile-menu">
              <input type="checkbox" className="nav-mobile-checkbox" id="nav-toggle"/>
              <label htmlFor="nav-toggle" className="nav-mobile-button">
                <span className="nav-mobile-icon">&nbsp;</span>
              </label>
              <div className="nav-mobile-background">&nbsp;</div>
              <nav className="nav-mobile-nav">
                <ul className="nav-mobile-list">
                  <li className="nav-mobile-list-item"><a className={`nav-mobile-list-link` + (active === 'home' ? ' active' : '')} onClick={runNav}>Home</a></li>
                  <li className="nav-mobile-list-item"><a className={`nav-mobile-list-link` + (active === 'architectural design' ? ' active' : '')} onClick={runNav}>Architectural Design</a></li>
                  <li className="nav-mobile-list-item"><a className={`nav-mobile-list-link` + (active === 'studio art' ? ' active' : '')} onClick={runNav}>Studio Art</a></li>
                  <li className="nav-mobile-list-item"><a className={`nav-mobile-list-link` + (active === 'services' ? ' active' : '')} onClick={runNav}>Services</a></li>
                  <li className="nav-mobile-list-item"><a className={`nav-mobile-list-link` + (active === 'contact' ? ' active' : '')} onClick={runNav}>Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
