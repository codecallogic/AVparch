import Nav from '../components/nav'
import Footer from '../components/footer'

const Services = ({}) => {
  
  return (
    <>
      <Nav></Nav>
      <div className="services-container">
        <div className="services">
          <div className="services-heading">We offer:</div>
          {/* <div className="services-person">
            <div className="services-person-subheading">Arthur Pristupa</div>
            <span className="services-person-subheading-2">Sacramento | San Francisco</span>
            <span className="services-person-subheading-2">arthurpristupa@gmail.com</span>
          </div> */}
          <div className="services-summary">
            <div className="services-summary-experience">
              <div className="services-summary-experience-group">
                <div className="services-summary-heading">Typical Plan Set:</div>
                <span className="services-summary-subheading">Cover Page/Site Plan</span>
              </div>
              <div className="services-summary-experience-group">
                <span className="services-summary-subheading">Note/Standards</span>
              </div>
              <div className="services-summary-experience-group">
                <span className="services-summary-subheading">Floor Plan (Existing/Proposed)</span>
              </div>
              <div className="services-summary-experience-group">
                <span className="services-summary-subheading">Elevations</span>
              </div>
              <div className="services-summary-experience-group">
                <span className="services-summary-subheading">Roof Plan</span>
              </div>
              <div className="services-summary-experience-group">
                <span className="services-summary-subheading">Sections</span>
              </div>
              <div className="services-summary-experience-group">
                <div className="services-summary-subheading">Electrical Plan</div>
              </div>
              <div className="services-summary-experience-group">
                <div className="services-summary-subheading">Architectural Details</div>
              </div>
            </div>
            <div className="services-summary-skills">
              <div className="services-summary-skills-group">
                <div className="services-summary-heading">Additional services:</div>
                <span className="services-summary-subheading">3D Rendering</span>
              </div>
              <div className="services-summary-skills-group">
                <span className="services-summary-subheading">Framing Plan</span>
              </div>
              <div className="services-summary-skills-group">
                <span className="services-summary-subheading">Roof Framing Plan​</span>
              </div>
              <div className="services-summary-skills-group">
                <span className="services-summary-subheading">Structural Details</span>
              </div>
              <div className="services-summary-skills-group">
                <span className="services-summary-description">Serving Sacramento to San Francisco surrounding areas. Don’t hesitate to call us today for your project needs. By phone <a href="tel:209-813-0257">209-813-0257</a> or email <a href = "mailto: arthur@avparch.com">arthur@avparch.com</a></span>
              </div>
              {/* <div className="services-summary-resume">
                <img src="/media/ArthurPristupaResume.png" alt="Resume"/>
                <img src="/media/Arthur Pristupa Resume-2.png" alt="Resume"/>
              </div>
              <a className="services-summary-resume-download" href='/media/Arthur Pristupa Resume.pdf' download>Download</a> */}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Services
