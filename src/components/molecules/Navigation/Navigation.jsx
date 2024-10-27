import NavLink from '../../atoms/Navlink/Navlink'
import './Navigation.css'

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li>
          <NavLink href="#discover">Discover</NavLink>
        </li>
        <li>
          <NavLink href="">Join</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;