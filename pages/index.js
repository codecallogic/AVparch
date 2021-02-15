import Nav from '../components/nav'
import Footer from '../components/footer'
import { useRouter } from 'next/router'
import {useState, useRef} from 'react'

const Home = ({}) => {

  const router = useRouter()

  const [sliderPosition, setPosition] = useState(-750)
  const interval = useRef(null)
  
  const goToProjects = (e) => {
    if(e.target.textContent.toLowerCase() == 'view projects') router.push(`/project-page`)
    if(e.target.textContent.toLowerCase() == 'view portfolio') router.push(`/project-page`)
  }
  
  const moveRight = () => {
    interval.current = setInterval(() => {
      setPosition(position => position +1)
    }, 10)
  }

  const moveLeft = () => {
    interval.current = setInterval(() => {
      setPosition(position => position -1)
    }, 10)
  }

  const stopInterval = () => {
    clearInterval(interval.current)
  }

  const goToProject = (e) => {
    router.push(`/${e}`)
  }
  
  return (
    <>
    <Nav></Nav>
    <div className="header">
      <div className="header-container">
        <h1 className="header-title">AVP<span>ARCHITECTURE</span></h1>
        <div className="header-button-container">
          <button className="header-button" onClick={goToProjects}>View Projects</button>
        </div>
        <h2 className="header-subheading">
          <span>Architecture struck me right <b>in between</b> the eye and the eyeball</span>
          <span>- Louis Kahn</span>
        </h2>
      </div>
      <div className="header-line-left"/>
      <div className="header-line-right-container"><div className="header-line-right"></div></div>
      <div className="header-line-left-2"/>
      <div className="header-line-right-container"><div className="header-line-right-2"></div></div>
    </div>
    <div className="slider-container">
      <div className="slider-left-line"></div>
      <div className="slider-left-track" onMouseOver={moveLeft} onMouseLeave={stopInterval}></div>
      <div className="slider-right-track" onMouseOver={moveRight} onMouseLeave={stopInterval}></div>
      <div className="slider">
        <div className="slider-track-container">
            <div className="slider-track" style={{left: sliderPosition}}>
              <div className="slider-track-slide" onClick={() => goToProject('container refuge | D.D')}><img src="/media/slider/slider-8.jpg" alt=""/><span className="slider-track-slide-overlay"></span></div>
              <div className="slider-track-slide" onClick={() => goToProject('parking garage | s.d | ca')}><img src="/media/slider/slider-9.png" alt=""/><span className="slider-track-slide-overlay"></span></div>
              <div className="slider-track-slide" onClick={() => goToProject('marriot renovation | s.d | ca')}><img src="/media/slider/slider-10.png" alt=""/><span className="slider-track-slide-overlay"></span></div>
              <div className="slider-track-slide" onClick={() => goToProject('r st. condos | s.d | ca')}><img src="/media/slider/slider-11.png" alt=""/><span className="slider-track-slide-overlay"></span></div>
              <div className="slider-track-slide" onClick={() => goToProject('s.v railroad museum | s.d | ca')}><img src="/media/slider/slider-12.png" alt=""/><span className="slider-track-slide-overlay"></span></div>
              <div className="slider-track-slide" onClick={() => goToProject('postcard | g.d | ca')}><img src="/media/slider/slider-13.jpg" alt=""/><span className="slider-track-slide-overlay"></span></div>
              <div className="slider-track-slide" onClick={() => goToProject('coffee house | s.d | g.d')}><img src="/media/slider/slider-1.jpg" alt=""/><span className="slider-track-slide-overlay"></span></div>
              <div className="slider-track-slide" onClick={() => goToProject('davis apartments | cd')}><img src="/media/slider/slider-2.png" alt=""/><span className="slider-track-slide-overlay"></span></div>
              <div className="slider-track-slide" onClick={() => goToProject('chase bank | s.d | ca')}><img src="/media/slider/slider-3.png" alt=""/><span className="slider-track-slide-overlay"></span></div>
              <div className="slider-track-slide" onClick={() => goToProject('regional offices | c.d | ca')}><img src="/media/slider/slider-4.png" alt=""/><span className="slider-track-slide-overlay"></span></div>
              <div className="slider-track-slide" onClick={() => goToProject('container refuge | D.D')}><img src="/media/slider/slider-5.jpg" alt=""/><span className="slider-track-slide-overlay"></span></div>
              <div className="slider-track-slide" onClick={() => goToProject('r st. condos | s.d | ca')}><img src="/media/slider/slider-6.png" alt=""/><span className="slider-track-slide-overlay"></span></div>
              <div className="slider-track-slide" onClick={() => goToProject('s.c home | s.d | san carlos')}><img src="/media/slider/slider-7.jpg" alt=""/><span className="slider-track-slide-overlay"></span></div>
              <div className="slider-track-slide" onClick={() => goToProject('container refuge | D.D')}><img src="/media/slider/slider-8.png" alt=""/><span className="slider-track-slide-overlay"></span></div>
              <div className="slider-track-slide" onClick={() => goToProject('parking garage | s.d | ca')}><img src="/media/slider/slider-9.png" alt=""/><span className="slider-track-slide-overlay"></span></div>
              <div className="slider-track-slide" onClick={() => goToProject('marriot renovation | s.d | ca')}><img src="/media/slider/slider-10.png" alt=""/><span className="slider-track-slide-overlay"></span></div>
              <div className="slider-track-slide" onClick={() => goToProject('r st. condos | s.d | ca')}><img src="/media/slider/slider-11.png" alt=""/><span className="slider-track-slide-overlay"></span></div>
              <div className="slider-track-slide" onClick={() => goToProject('s.v railroad museum | s.d | ca')}><img src="/media/slider/slider-12.png" alt=""/><span className="slider-track-slide-overlay"></span></div>
              <div className="slider-track-slide" onClick={() => goToProject('postcard | g.d | ca')}><img src="/media/slider/slider-13.jpg" alt=""/><span className="slider-track-slide-overlay"></span></div>
              <div className="slider-track-slide" onClick={() => goToProject('coffee house | s.d | g.d')}><img src="/media/slider/slider-1.jpg" alt=""/><span className="slider-track-slide-overlay"></span></div>
              <div className="slider-track-slide" onClick={() => goToProject('davis apartments | cd')}><img src="/media/slider/slider-2.png" alt=""/><span className="slider-track-slide-overlay"></span></div>
              <div className="slider-track-slide" onClick={() => goToProject('chase bank | s.d | ca')}><img src="/media/slider/slider-3.png" alt=""/><span className="slider-track-slide-overlay"></span></div>
              <div className="slider-track-slide" onClick={() => goToProject('regional offices | c.d | ca')}><img src="/media/slider/slider-4.png" alt=""/><span className="slider-track-slide-overlay"></span></div>
              <div className="slider-track-slide" onClick={() => goToProject('container refuge | D.D')}><img src="/media/slider/slider-5.jpg" alt=""/><span className="slider-track-slide-overlay"></span></div>
          </div>
        </div>
      </div>
      <div className="slider-right-line"></div>
    </div>
    <div className="description">
      <div className="description-line"></div>
      <h1 className="description-heading">
        <span>Sacramento | San Francisco</span>
        <span>Specializing in residential design, building permits, plan sets, graphic design, and 3D visual rendering type work. <span>&#x2b;</span></span>
      </h1>
      <div></div>
    </div>
    <div className="description">
      <div className="description-line-right"></div>
      <div></div>
      <div></div>
    </div>
    <div className="description">
      <div></div>
      <h1 className="description-heading-2">Archdesigngraphics</h1>
      <div></div>
    </div>
    <div className="description">
      <div className="description-line-right-2"></div>
      <div className="description-button-container">
          <button className="description-button" onClick={goToProjects}>View Projects</button>
      </div>
      <div className="description-line-left"></div>
    </div>
    <div className="white-space-bottom-large"></div>
    <Footer></Footer>
    </>
  )
}

export default Home
