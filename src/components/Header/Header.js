import { Link } from "react-router-dom";
import { ReactComponent as Github } from "../../assets/svg/github-brands.svg";
import styled from "./Header.module.css";
const Header = () => {
  return (
    <div className={styled.headerContainer}>
      <div className={styled.headerLogo}>
        <Github className={styled.githubIcon} />
        <h1>Github Search</h1>
      </div>
      <div className={styled.headerNav}>
        <Link to="/" className={styled.navItem}>
          Home
        </Link>
        <Link to="about" className={styled.navItem}>
          About
        </Link>
      </div>
    </div>
  );
};

export default Header;
