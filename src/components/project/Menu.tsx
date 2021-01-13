import styles from "./styles/Menu.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

interface MenuProps {
  menuInfo: {
    chapter: string;
    name: string;
    submenu?: Array<{ number: number; name: string }>;
    plus?: boolean;
  };
}

const Menu = ({ menuInfo }: MenuProps) => {
  const router = useRouter();
  let slug = router.query.slug;
  return (
    <>
      {menuInfo.plus ? (
        <Link href="/lol/plus">
          <a className={styles.main_menuWrap}>
            <div
              className={
                slug !== undefined && slug[0] === "plus"
                  ? styles.selected_mainmenu
                  : styles.plus_menu
              }
            >
              {menuInfo.chapter}. {menuInfo.name}
            </div>
          </a>
        </Link>
      ) : menuInfo.chapter === "00" ? (
        <Link href="/lol">
          <a className={styles.main_menuWrap}>
            <div
              className={
                slug === undefined ? styles.selected_mainmenu : styles.main_menu
              }
            >
              {menuInfo.chapter}. {menuInfo.name}
            </div>
          </a>
        </Link>
      ) : (
        <Link href={`/lol/${menuInfo.chapter}`}>
          <a className={styles.main_menuWrap}>
            <div
              className={
                slug !== undefined &&
                slug.length === 1 &&
                slug[0] === menuInfo.chapter
                  ? styles.selected_mainmenu
                  : styles.main_menu
              }
            >
              {menuInfo.chapter}. {menuInfo.name}
            </div>
          </a>
        </Link>
      )}
      {menuInfo.submenu &&
        menuInfo.submenu.map((item) => {
          return (
            <Link
              href={`/lol/${menuInfo.chapter}/0${item.number}`}
              key={item.number}
            >
              <a className={styles.sub_menuWrap}>
                <div
                  className={
                    slug !== undefined &&
                    slug.length === 2 &&
                    slug[0] === menuInfo.chapter &&
                    slug[1] === "0" + String(item.number)
                      ? styles.selected_submenu
                      : styles.sub_menu
                  }
                >
                  {menuInfo.chapter}-{item.number}. {item.name}
                </div>
              </a>
            </Link>
          );
        })}
    </>
  );
};

export default Menu;
