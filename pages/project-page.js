import Nav from '../components/nav'
import Footer from '../components/footer'
import imageFiles from '../services/dataclusters/projects.json'
import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'

const Projects = ({}) => {
  const router = useRouter()
  const makeEven = () => {
    let numberOfImages = images.length/2
    Math.abs(images.length % 2) == 1 ? numberOfImages = numberOfImages + 1 : numberOfImages
    return numberOfImages
  }
  const [images, setImages] = useState(imageFiles[0])
  const [limit, setLimit] = useState(makeEven)

  const increaseLimit = () => {
    setLimit(images.length)
  }

  const goToProject = (e) => {
    router.push(`/` + (e.target.id))
  }
  
  return (
    <>
    <Nav></Nav>
    <div className="projects-container">
      <div className="projects"> 
        {images.length > 0 && images.slice(0,limit).map( (file, i) => {
          return <div key={i} className="projects-item" onClick={goToProject}>
            <>
            <div><img src={`/media/projects/${encodeURIComponent(file)}`} alt={file}/><span className="projects-item-overlay" id={file.replace(/\.[^/.]+$/, "")}></span></div>
            <span>{file.replace(/\.[^/.]+$/, "")}</span>
            </>
          </div>
        })
        }
      </div>
      { limit !== images.length && <div className="projects-showMore-container">
        <div className="projects-showMore" onClick={increaseLimit}>
          Show more
        </div>
        </div>
      }
      <div className="projects-description">
        Specializing in space planning and design in Sacramento, Arthur's work focuses on <span>architectural renderings</span> and <span>floor plans</span> of <span>commercial + residential</span> type projects.
      </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Projects 
