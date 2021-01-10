import styles from "../../styles/Navbar.module.scss";
import Link from "next/link";
import NavbarLayout from "./NavbarLayout";

const Navbar: React.FC = () => {
  return (
    <NavbarLayout>
      <div className={styles.nav_titleWrap}>
        <Link href="/">
          <a className={styles.nav_title}>DataDuck</a>
        </Link>
      </div>
      <div className={styles.nav_menu}>
        <div className={styles.nav_project}>프로젝트</div>
        <div className={styles.nav_authorize}>
          <li className={styles.nav_li}>로그인</li>
          <li className={styles.nav_li}>회원가입</li>
        </div>
      </div>
    </NavbarLayout>
  );
};

export default Navbar;
