
import { NavLink } from "react-router-dom"
import logo from "../../../assets/images/logo.png"
import './Logo.css'

function Logo() {
  return (
    <div className="logo-container">
      <img src={logo} alt="SoundWave Logo" className="logo-image" />
      <NavLink to={"/"}><h1>Soundwave</h1></NavLink>
    </div>
  )
}

export default Logo