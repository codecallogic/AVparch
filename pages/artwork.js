import Nav from '../components/nav'
import Footer from '../components/footer'
import artWork from '../services/dataclusters/paintings.json'
import {useState, useEffect} from 'react'

const Artwork = ({}) => {
  const makeEven = () => {
    let numberOfImages = artWork.length/2
    Math.round((artWork.length/2) % 2) == 1 ? numberOfImages = numberOfImages + 1 : numberOfImages
    return numberOfImages
  }
  const [images, setImages] = useState(artWork)
  const [limit, setLimit] = useState(makeEven)

  const increaseLimit = () => {
    setLimit(images.length)
  }

  useEffect( () => {
  })
  
  return (
    <>
      <Nav></Nav>
      <div className="artwork-container">
        <div className="artwork">
          {images.length > 0 && images.slice(0,limit).map( (file, i) => {
            return <div key={i} className="artwork-item">
              <>
              <img src={`/media/artwork/${encodeURIComponent(file)}`} alt={file}/>
              </>
            </div>
            })
          }
        </div>
        { limit !== images.length && <div className="artwork-showMore-container">
        <div className="artwork-showMore" onClick={increaseLimit}>
          Show more
        </div>
        </div>
      }
      </div>
      <Footer></Footer>
    </>
  )
}

export default Artwork
