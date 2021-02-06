import { useRouter } from "next/router";
import {useState, useEffect} from "react"
import Images from '../services/dataclusters/projects.json'
import ImageGallery from 'react-image-gallery';
import Nav from '../components/nav'
import Footer from '../components/footer'

const Project = ({query}) => {
  const router = useRouter();
  const [images, setImages] = useState(Images[1])

  useEffect( () => {
    let currentProjectImages = []
    Images[1].map( (file) => {
      if(file.category == router.query.id){
        currentProjectImages.push(file)
      }
    })
    setImages(currentProjectImages)
  }, [query])

  const viewAll = () => {
    router.push('/project-page')
  }

  const nextProject = () => {
    let index = null
    Images[0].map( (file, i) => {
      if(file.replace(/\.[^/.]+$/, "") == router.query.id){
        index = i + 1
      }
    })
    if(index >= Images[0].length) index = 0
    let next = Images[0][index].replace(/\.[^/.]+$/, "")
    router.push(`/${next}`)
  }

  return (
    <>
    <Nav></Nav>
    <div className="carousel">
      <div className="carousel-title-container"><div className="carousel-title">{images[0].title}</div></div>
      <ImageGallery thumbnailPosition='bottom' infinite={true} autoPlay={true} items={images} />;
    </div>
    <div className="project-description-container">
      <div className="project-description">
        {images[0].award && <div className="project-description-award">
          <img src={images[0].award.image} alt=""/>
          <div>
            <span className="project-description-award-title">{images[0].award.title}</span>
            <span className="project-description-award-title">{images[0].award.subtitle}</span>
          </div>
        </div>
        }
        {images[0].descriptionHeading && <div className="project-description-heading">
          {images[0].descriptionHeading}
        </div>
        }
        {images[0].paragraph1 && <div className="project-description-paragraph">
          {images[0].paragraph1}
        </div>
        }
        {images[0].paragraph2 && <div className="project-description-paragraph">
          {images[0].paragraph2}
        </div>
        }
        {images[0].paragraph3 && <div className="project-description-paragraph">
          {images[0].paragraph3}
        </div>
        }
        {images[0].paragraph4 && <div className="project-description-paragraph">
          {images[0].paragraph4}
        </div>
        }
        <div className="project-description-button-container">
          <button className="project-description-button" onClick={nextProject}>Next Project</button>
          <button className="project-description-button" onClick={viewAll}>View All Projects</button>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  )
}

Project.getInitialProps = async ({query}) => {
  return {query}
}

export default Project

