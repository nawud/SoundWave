
import { NavLink } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li>
          <NavLink className={"Navlink"} to={"/DiscoverSection"}>Discover</NavLink>
        </li>
        <li>
          <NavLink className={"Navlink"} to={"/JoinSection"}>Join</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;