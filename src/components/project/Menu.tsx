import styles from "./styles/Menu.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

interface MenuProps {
  menuInfo: {
    project: string;
    chapter: string;
    name: string;
    beforeLastmenu?: boolean;
    submenu?: Array<{ number: number; name: string; beforeLastmenu?: boolean }>;
    plus?: boolean;
  };
}

const Menu = ({ menuInfo }: MenuProps) => {
  const router = useRouter();
  let slug = router.query.slug;
  return (
    <>
      {menuInfo.plus ? (
        <Link href={`/${menuInfo.project}/plus`}>
          <a className={styles.main_menuWrap}>
            <div
              className={
                slug !== undefined && slug[0] === "plus"
                  ? styles.selected_mainmenu
                  : styles.plus_menu
              }
            >
              {`+${menuInfo.chapter.toUpperCase()}`}. {menuInfo.name}
            </div>
          </a>
        </Link>
      ) : menuInfo.chapter === "00" ? (
        <Link href={`/${menuInfo.project}`}>
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
        <Link href={`/${menuInfo.project}/${menuInfo.chapter}`}>
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
              href={`/${menuInfo.project}/${menuInfo.chapter}/${item.number}`}
              key={item.number}
            >
              <a className={styles.sub_menuWrap}>
                <div
                  className={
                    slug !== undefined &&
                    slug.length === 2 &&
                    slug[0] === menuInfo.chapter &&
                    slug[1] === String(item.number)
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
