import './HeroSection.css';
import img from '../../../assets/images/landing-page-girl.png'

function HeroSection() {
  return (

    <div className="container">
      <section className="hero-section">
        <img src={img} alt="landing" className="hero-image" />
        <div className="hero-content">
          <p className="hero-title">Feel The Music</p>
          <p className="hero-text">Stream over 20 thousand songs with one click</p>
          <button className="hero-button">Join Now</button>
        </div>
        <div className='background-template'></div>
        <div className='background-template-2'></div>
        <div className='background-template-3'></div>
      </section>
    </div>
  );
}

export default HeroSection; 
