import Navbar from "./Navbar";
import styles from "../../styles/Layout.module.css";
import Main from "./Main";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div className={styles.container}>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
