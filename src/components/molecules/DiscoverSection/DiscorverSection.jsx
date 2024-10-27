import './DiscoverSection.css'
import image1 from '../../../assets/images/microphone.svg'
import image2 from '../../../assets/images/albums.svg'
import image3 from '../../../assets/images/more.svg'
import image4 from '../../../assets/images/covers.jpg'
function DiscorverSection() {
  return (
    <>
      <section id='discover'>
        <div className='discover__container'>
          <div className="container2">
            <h2 className="discover__title" >Discover new music</h2>
            <div className="discover__navigation">
              <div className="discover__nav-item"
              ><img src={image1} alt="microfono" />
              </div>
              <div className="discover__nav-item">
                <img src={image2} alt="album" />
              </div>
              <div className="discover__nav-item">
                <img src={image3} alt="mas" />
              </div>
            </div>
            <p className="discover__description">By joining you can benefit by listening to the latest albums released.</p>
          </div>
          <div className='cover'>
            <img src={image4} alt="cover" />
          </div>
        </div>
      </section>
    </>
  )
}

export default DiscorverSection
