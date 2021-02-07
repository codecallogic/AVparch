import Nav from '../components/nav'
import Footer from '../components/footer'

const CV = ({}) => {
  
  return (
    <>
      <Nav></Nav>
      <div className="cv-container">
        <div className="cv">
          <div className="cv-heading">CV</div>
          <div className="cv-person">
            <div className="cv-person-subheading">Arthur Pristupa</div>
            <span className="cv-person-subheading-2">Sacramento | San Francisco</span>
            <span className="cv-person-subheading-2">arthurpristupa@gmail.com</span>
          </div>
          <div className="cv-summary">
            <div className="cv-summary-experience">
              <div className="cv-summary-experience-group">
                <div className="cv-summary-heading">Experience</div>
                <span className="cv-summary-subheading">2021</span>
                <span className="cv-summary-description">Architectural Planner | AP Design Group |  Altus Drafting</span>
                <span className="cv-summary-description">Residential // Retail</span>
              </div>
              <div className="cv-summary-experience-group">
                <span className="cv-summary-subheading">2020</span>
                <span className="cv-summary-description">Architectural Coordinator | Baranov Building Design</span>
                <span className="cv-summary-description">Residential // Commercial</span>
              </div>
              <div className="cv-summary-experience-group">
                <span className="cv-summary-subheading">2018-2020</span>
                <span className="cv-summary-description">Architectural Designer | Stantec Architecture</span>
                <span className="cv-summary-description">Buildings // Healthcare // Civic</span>
              </div>
              <div className="cv-summary-experience-group">
                <span className="cv-summary-subheading">2018</span>
                <span className="cv-summary-description">Architectural Designer | KB Architecture</span>
                <span className="cv-summary-description">Residential // Kinetics // Commercial</span>
              </div>
              <div className="cv-summary-experience-group">
                <span className="cv-summary-subheading">2017-2018</span>
                <span className="cv-summary-description">Project Designer | Moniz Architecture</span>
                <span className="cv-summary-description">Commercial // Residential // Civic</span>
              </div>
              <div className="cv-summary-experience-group">
                <span className="cv-summary-subheading">2016</span>
                <span className="cv-summary-description">Design Intern | Williams + Paddon</span>
                <span className="cv-summary-description">Architects // Planners // People</span>
              </div>
              <div className="cv-summary-experience-group">
                <div className="cv-summary-heading">Education</div>
                <span className="cv-summary-subheading">CSU Sacramento</span>
                <span className="cv-summary-description">Bachelor of Arts // Interior Architecture, May 2017</span>
                <span className="cv-summary-description">Minor // Studio Art, May 2017</span>
              </div>
              <div className="cv-summary-experience-group">
                <div className="cv-summary-heading">Honors</div>
                <span className="cv-summary-description">2017 - Career Merit Award // IIDA</span>
                <span className="cv-summary-description">2016 - Design Merit Award // IIDA</span>
              </div>
            </div>
            <div className="cv-summary-skills">
              <div className="cv-summary-skills-group">
                <div className="cv-summary-heading">Skills</div>
                <span className="cv-summary-subheading">Drafting // Rendering</span>
                <span className="cv-summary-description">AutoCAD, Revit, Sketchup, Podium, Blubeam</span>
              </div>
              <div className="cv-summary-skills-group">
                <span className="cv-summary-subheading">Adobe CC</span>
                <span className="cv-summary-description">Photoshop, Illustrator InDesign</span>
              </div>
              <div className="cv-summary-skills-group">
                <span className="cv-summary-subheading">Office Programs​</span>
                <span className="cv-summary-description">Access, Excel, Word, PowerPoint, Outlook</span>
              </div>
              <div className="cv-summary-skills-group">
                <span className="cv-summary-subheading">Languages​</span>
                <span className="cv-summary-description">Fluent in Ukrainian and English</span>
              </div>
              <div className="cv-summary-skills-group">
                <span className="cv-summary-subheading">Affiliations​</span>
                <span className="cv-summary-description">PRINTS Architecture & Design Club CSU</span>
                <span className="cv-summary-description">AIA, IIDA, NCARB</span>
              </div>
              <div className="cv-summary-resume">
                <img src="/media/ArthurPristupaResume.png" alt="Resume"/>
                <img src="/media/Arthur Pristupa Resume-2.png" alt="Resume"/>
              </div>
              <a className="cv-summary-resume-download" href='/media/Arthur Pristupa Resume.pdf' download>Download</a>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default CV
