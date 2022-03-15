import Header from "../components/Header/Header";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="main-container">{children}</div>
    </div>
  );
};

export default Layout;
