import { useRouter } from "next/router";
import styles from "../../styles/NavbarLayout.module.scss";

interface Props {
  children: React.ReactNode;
}

const NavbarLayout = ({ children }: Props) => {
  const router = useRouter();
  const isRootpage = router.pathname === "/" ? true : false;

  return isRootpage ? (
    <div className={styles.rootnav_wrap}>{children}</div>
  ) : (
    <div className={styles.nav_wrap}>{children}</div>
  );
};

export default NavbarLayout;
