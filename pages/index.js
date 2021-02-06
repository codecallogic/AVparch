import Nav from '../components/nav'
import Footer from '../components/footer'

const Home = ({}) => {
  
  return (
    <>
    <Nav></Nav>
    <div className="header">
      <div className="header-container">
        <h1 className="header-title">ARTHUR<span>PRISTUPA</span></h1>
        <div className="header-button-container">
          <button className="header-button">View Projects</button>
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
      <div className="slider-left-track"></div>
      <div className="slider-right-track"></div>
      <div className="slider">
        <div className="slider-track-container">
            <div className="slider-track">
              <div className="slider-track-slide"><img src="/media/slider/slider-7.jpg" alt=""/><span className="slider-track-slide-overlay"></span></div>
              <div className="slider-track-slide"><img src="/media/slider/slider-8.png" alt=""/><span className="slider-track-slide-overlay"></span></div>
              <div className="slider-track-slide"><img src="/media/slider/slider-10.png" alt=""/><span className="slider-track-slide-overlay"></span></div>
              <div className="slider-track-slide"><img src="/media/slider/slider-11.png" alt=""/><span className="slider-track-slide-overlay"></span></div>
              <div className="slider-track-slide"><img src="/media/slider/slider-12.png" alt=""/><span className="slider-track-slide-overlay"></span></div>
              <div className="slider-track-slide"><img src="/media/slider/slider-13.jpg" alt=""/><span className="slider-track-slide-overlay"></span></div>
              <div className="slider-track-slide"><img src="/media/slider/slider-1.jpg" alt=""/><span className="slider-track-slide-overlay"></span></div>
              <div className="slider-track-slide"><img src="/media/slider/slider-2.png" alt=""/><span className="slider-track-slide-overlay"></span></div>
              <div className="slider-track-slide"><img src="/media/slider/slider-3.png" alt=""/><span className="slider-track-slide-overlay"></span></div>
              <div className="slider-track-slide"><img src="/media/slider/slider-4.png" alt=""/><span className="slider-track-slide-overlay"></span></div>
              <div className="slider-track-slide"><img src="/media/slider/slider-5.jpg" alt=""/><span className="slider-track-slide-overlay"></span></div>
              <div className="slider-track-slide"><img src="/media/slider/slider-6.png" alt=""/><span className="slider-track-slide-overlay"></span></div>
              <div className="slider-track-slide"><img src="/media/slider/slider-7.jpg" alt=""/><span className="slider-track-slide-overlay"></span></div>
              <div className="slider-track-slide"><img src="/media/slider/slider-8.png" alt=""/><span className="slider-track-slide-overlay"></span></div>
              <div className="slider-track-slide"><img src="/media/slider/slider-9.png" alt=""/><span className="slider-track-slide-overlay"></span></div>
              <div className="slider-track-slide"><img src="/media/slider/slider-10.png" alt=""/><span className="slider-track-slide-overlay"></span></div>
              <div className="slider-track-slide"><img src="/media/slider/slider-11.png" alt=""/><span className="slider-track-slide-overlay"></span></div>
              <div className="slider-track-slide"><img src="/media/slider/slider-12.png" alt=""/><span className="slider-track-slide-overlay"></span></div>
              <div className="slider-track-slide"><img src="/media/slider/slider-13.jpg" alt=""/><span className="slider-track-slide-overlay"></span></div>
              <div className="slider-track-slide"><img src="/media/slider/slider-1.jpg" alt=""/><span className="slider-track-slide-overlay"></span></div>
              <div className="slider-track-slide"><img src="/media/slider/slider-2.png" alt=""/><span className="slider-track-slide-overlay"></span></div>
              <div className="slider-track-slide"><img src="/media/slider/slider-3.png" alt=""/><span className="slider-track-slide-overlay"></span></div>
              <div className="slider-track-slide"><img src="/media/slider/slider-4.png" alt=""/><span className="slider-track-slide-overlay"></span></div>
              <div className="slider-track-slide"><img src="/media/slider/slider-5.jpg" alt=""/><span className="slider-track-slide-overlay"></span></div>
          </div>
        </div>
      </div>
      <div className="slider-right-line"></div>
    </div>
    <div className="description">
      <div className="description-line"></div>
      <h1 className="description-heading">
        <span>Sacramento | San Francisco</span>
        <span>Specializing in freelancing architecture, graphic design, and 3D visual rendering type work. <span>&#x2b;</span></span>
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
      <div className="description-button-container"><button className="description-button">View Portfolio</button></div>
      <div className="description-line-left"></div>
    </div>
    <div className="white-space-bottom-large"></div>
    <Footer></Footer>
    </>
  )
}

export default Home
