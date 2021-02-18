import Nav from '../components/nav'
import Footer from '../components/footer'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {API} from '../config'

const Contact = ({}) => {

  const [form, setEmail] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [notifications, setNotifications] = useState(null)
  
  const {name, email, phone, subject, message} = form
  
  const sendEmail = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${API}/email`, form)
      setEmail({...form, name: '', email: '', phone: '', subject: '', message: ''})
      setNotifications(response.data)
    } catch (error) {
      if(error.response.status == 400){
      setEmail({...form, name: '', email: '', phone: '', subject: '', message: ''})
      setNotifications(error.response.data)
      }
    }
  }

  const handleChange = (e) => {
    setEmail({...form, [e.target.name]: e.target.value})
  }
  
  return (
    <>
      <Nav></Nav>
      <div className="about-container">
        <div className="about">
          <div className="about-arthur">            
            <img src="/media/462C3150-F8BF-48F3-BB6E-C34CC3182F93.JPG.jpg" alt="Arthur Pristupa" className="about-arthur-picture"/>
            <h1 className="about-arthur-heading">Arthur Pristupa | Owner</h1>
            <div className="about-arthur-description">AVP Architecture began in 2017 with a desire to bring clients ideas and projects to life. From small to larger type work, each is unique with its needs and challenges. We hope to make the process smooth and understandable for you, whether it’s just a few renderings to pitch an idea or a full house plan permit set, be confident that your project will be in the right hands.</div>
            <h2 className="about-arthur-subheading">Lets work together</h2>
          </div>
          <div className="about-contact">
            <h1 className="about-contact-heading">Contact</h1>
            <div className="about-contact-info">
              <span>Sacramento, CA 95843</span>
              <span>arthur@avparch.com</span>
              <span>Tel. 209.813.0257</span>
            </div>
            <br/>
            <form action="POST" className="about-contact-form" onSubmit={sendEmail}>
              <h3 className="about-contact-form-heading">Inquiries? Send a message below</h3>
              <div className="about-contact-form-container">
                <div className="about-contact-form-inputs">
                  <input type="text" name="name" placeholder="Name *" value={name} onChange={handleChange}/>
                  <input type="email" name="email" placeholder="Email *" value={email} onChange={handleChange}/>
                  <input type="phone" name="phone" placeholder="Phone" value={phone} onChange={handleChange}/>
                  <input type="subject" name="subject" placeholder="Subject" value={subject} onChange={handleChange}/>
                </div>
                <textarea className="about-contact-form-message" placeholder="Message" name="message" value={message} onChange={handleChange}></textarea>
              </div>
              <button type="submit" className="about-contact-form-button">Send</button>
              { notifications !== null && <span className="about-contact-form-notification">{notifications}</span>
              }
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

export default Contact
