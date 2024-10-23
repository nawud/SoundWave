
import logo from "../../../assets/images/logo.png"
import './Logo.css'

function Logo() {
  return (
    <div className="logo-container">
    <img src={logo} alt="SoundWave Logo" className="logo-image" />
    <h1>Soundwave</h1>
    </div>
  )
}

export default Logo