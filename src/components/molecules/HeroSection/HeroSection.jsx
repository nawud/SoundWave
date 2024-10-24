import './HeroSection.css';
import img from '../../../assets/images/landing-page-girl.png'

function HeroSection() {
  return (
    <section className="hero-section">
       <img src={img} alt="landing" className="hero-image" />
      <div className="hero-content">
        <h1 className="hero-title">Feel The Music</h1>
        <p className="hero-text">Stream over 20 thousand songs with one click</p>
        <button className="hero-button">Join Now</button>
      </div>
      <div className='background-template'></div>
    </section>
  );
}

export default HeroSection; 
