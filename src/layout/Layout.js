import Header from "../components/Header/Header";
import styled from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={styled.mainContainer}>{children}</div>
    </div>
  );
};

export default Layout;
