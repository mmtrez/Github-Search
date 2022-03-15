import { Link } from "react-router-dom";
import { ReactComponent as Github } from "../../assets/svg/github-brands.svg";
import "./Header.css";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <Github className="github-icon" />
        <h1>Github Search</h1>
      </div>
      <div className="header-nav">
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="about" className="nav-item">
          About
        </Link>
      </div>
    </div>
  );
};

export default Header;
