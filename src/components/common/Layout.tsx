import Navbar from "./Navbar";
import styles from "./styles/Layout.module.scss";
import Footer from "./Footer";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
