import Logo from '../atoms/Logo/Logo'
import Navigation from '../molecules/Navigation/Navigation'
import './header.css'

function Header() {
  return (
    <>
    <div className='header-container'>
      <Logo/>
      <Navigation/>
    </div>
    </>

  )
}

export default Header
