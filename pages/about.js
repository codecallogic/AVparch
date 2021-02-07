import Nav from '../components/nav'
import Footer from '../components/footer'

const About = ({}) => {

  const sendEmail = (e) => {
    e.preventDefault()
  }
  
  return (
    <>
      <Nav></Nav>
      <div className="about-container">
        <div className="about">
          <div className="about-arthur">
            <h1 className="about-arthur-heading">About</h1>
            <img src="/media/462C3150-F8BF-48F3-BB6E-C34CC3182F93.JPG.jpg" alt="Arthur Pristupa" className="about-arthur-picture"/>
            <div className="about-arthur-description">Currently an Architectural Designer in Sacramento, California. Arthur is very enthusiastic about design, whether it's in the graphics, interiors, or architecture and has had a wide variety of experience in the design field. Within the next few years, he hopes to obtain a license in Architecture.</div>
            <h2 className="about-arthur-subheading">Lets work together</h2>
          </div>
          <div className="about-contact">
            <h1 className="about-contact-heading">Contact</h1>
            <div className="about-contact-info">
              <span>Sacramento, CA 95843</span>
              <span>arthurpristupa@gmail.com</span>
              <span>Tel. 209.813.0257</span>
            </div>
            <form action="POST" className="about-contact-form" onSubmit={sendEmail}>
              <h3 className="about-contact-form-heading">Inquiries? Send a message below</h3>
              <div className="about-contact-form-container">
                <div className="about-contact-form-inputs">
                  <input type="text" name="name" placeholder="Name *"/>
                  <input type="email" name="email" placeholder="Email *"/>
                  <input type="phone" name="phone" placeholder="Phone"/>
                  <input type="subject" name="subject" placeholder="Subject"/>
                </div>
                <textarea className="about-contact-form-message" placeholder="Message"></textarea>
              </div>
              <button className="about-contact-form-button">Send</button>
            </form>
            <div className="about-contact-icons">
              <a href="https://www.linkedin.com/in/arthur-pristupa-0037a9b6/" target="_blank"><svg>
                <use xlinkHref="/sprite.svg#icon-linkedin-with-circle"></use>
              </svg></a>
              <a href="https://www.instagram.com/arthurpristupa/"><svg>
                <use xlinkHref="/sprite.svg#icon-instagram-with-circle" target="_blank"></use>
              </svg></a>
              <a href="https://www.facebook.com/arthur.pristupa"><svg>
                <use xlinkHref="/sprite.svg#icon-facebook-with-circle" target="_blank"></use>
              </svg></a>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default About
