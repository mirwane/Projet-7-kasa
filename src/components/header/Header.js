import { Link } from "react-router-dom";
import kasaIcon from "../../assets/images/kasa.svg";
import "./Header.scss";

function Header() {
  return (
    <span className="Header">
      <img src={kasaIcon} alt="icon kasa" className="kasaIcon" />
      <nav className="navigationLink">
        <ul>
          <li>
            <Link to="/kasa/">Accueil</Link>
          </li>
          <li>
            <Link to="/kasa/about">A propos</Link>
          </li>
        </ul>
      </nav>
    </span>
  );
}

export default Header;
