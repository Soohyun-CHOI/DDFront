import styles from "../../styles/Menu.module.scss";
import Link from "next/link";

interface MenuProps {
  menuInfo: { chapter: string; name: string; plus?: boolean };
  submenu?: Array<{ chapter: string; number: number; name: string }>;
}

const Menu: React.FC<MenuProps> = ({ menuInfo, submenu }) => {
  return (
    <>
      {menuInfo.plus ? (
        <Link href="/">
          <a className={styles.main_menuWrap}>
            <div className={styles.plus_menu}>
              {menuInfo.chapter}. {menuInfo.name}
            </div>
          </a>
        </Link>
      ) : (
        <Link href="/">
          <a className={styles.main_menuWrap}>
            <div className={styles.main_menu}>
              {menuInfo.chapter}. {menuInfo.name}
            </div>
          </a>
        </Link>
      )}
      {submenu &&
        submenu.map((item) => {
          return (
            <Link href="/">
              <a key={item.number} className={styles.sub_menuWrap}>
                <div className={styles.sub_menu}>
                  {item.chapter}-{item.number}. {item.name}
                </div>
              </a>
            </Link>
          );
        })}
    </>
  );
};

export default Menu;
