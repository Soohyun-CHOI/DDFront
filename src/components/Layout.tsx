import Navbar from "./navbar";
import styles from "../../styles/Layout.module.css";
import Main from "./routes/main";

const Layout = (props) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Main />
      {props.children}
    </div>
  );
};

export default Layout;
