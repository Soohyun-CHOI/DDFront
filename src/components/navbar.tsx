import styles from "../../styles/navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.nav_wrap}>
      <div className={styles.nav_title}>DataDuck</div>
      <div className={styles.nav_menu}>
        <div className={styles.nav_project}>프로젝트</div>
        <div className={styles.nav_authorize}>
          <li className={styles.nav_li}>로그인</li>
          <li className={styles.nav_li}>회원가입</li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
