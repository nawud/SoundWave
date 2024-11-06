import './DiscoverSection.css'
import image1 from '../../../assets/images/microphone.svg'
import image2 from '../../../assets/images/albums.svg'
import image3 from '../../../assets/images/more.svg'
import image4 from '../../../assets/images/covers.jpg'
import Header from '../../organisms/Header/Header'
import Footer from '../../organisms/Footer/Footer'

function DiscorverSection() {
  return (
    <>
      <Header />
      <div className="content">
        <section>
          <div className='discover__container'>
            <div className="container2">
              <h2 className="discover__title" >Discover new music</h2>
              <div className="discover__navigation">
                <div className="discover__nav-item"
                ><img src={image1} alt="microfono" />
                  <p>Charts</p>
                </div>
                <div className="discover__nav-item">
                  <img src={image2} alt="album" />
                  <p>Albums</p>
                </div>
                <div className="discover__nav-item">
                  <img src={image3} alt="mas" />
                  <p>More</p>
                </div>
              </div>
              <p className="discover__description">By joining you can benefit by listening to the latest albums released.</p>
            </div>
            <div className='cover'>
              <img src={image4} alt="cover" />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default DiscorverSection
