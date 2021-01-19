import styles from "./styles/Nextbutton.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { LolmenuInfo } from "./Menulist";

interface NextbuttonProps {
  project: string;
}

export const matchMenuinfo = (project: String) => {
  switch (project) {
    case "lol":
      return LolmenuInfo;
    default:
      return null;
  }
};

export const matchNextPageURL = (
  menuInfo: Array<{
    project: string;
    chapter: string;
    name: string;
    beforeLastmenu?: boolean;
    submenu?: Array<{ number: Number; name: string; beforeLastmenu?: boolean }>;
  }>,
  slug: string | string[]
) => {
  const menuObj = menuInfo.filter((obj) => obj.chapter === slug[0])[0];
  const submenuObj = menuObj?.submenu || null;
  const lastmenuObj = menuInfo[menuInfo.length - 1];
  // 메인 메뉴일 때
  if (slug.length === 1) {
    // 서브메뉴가 있을 때
    if (submenuObj) {
      return `/${menuObj.project}/${menuObj.chapter}/${submenuObj[0].number}`;
    }

    // 서브 메뉴가 없고 다음 메뉴가 마지막 메뉴일 때
    if (menuObj?.beforeLastmenu) {
      return `/${menuObj.project}/${lastmenuObj.chapter}`;
    }

    // 서브 메뉴가 없고 다음 메뉴가 마지막 메뉴가 아닐 때
    return `/${menuObj?.project}/${
      Number(menuObj?.chapter) + 1 < 10
        ? "0" + String(Number(menuObj?.chapter) + 1)
        : String(Number(menuObj?.chapter) + 1)
    }`;
  }

  // 서브메뉴 일 때
  else {
    // 추가적인 서브메뉴가 있을 때
    if (submenuObj.filter((obj) => obj.number === Number(slug[1]) + 1)[0]) {
      return `/${menuObj.project}/${menuObj.chapter}/${
        submenuObj.filter((obj) => obj.number === Number(slug[1]) + 1)[0].number
      }`;
    }
    // 추가적인 서브메뉴가 없고 다음 메뉴가 마지막 메뉴일 때
    if (submenuObj.filter((obj) => obj?.beforeLastmenu)[0]) {
      return `/${menuObj.project}/${lastmenuObj.chapter}`;
    }

    // 추가적인 서브메뉴가 없고 다음 메뉴가 마지막 메뉴가 아닐 때
    return `/${menuObj.project}/${
      Number(menuObj.chapter) + 1 < 10
        ? "0" + String(Number(menuObj?.chapter) + 1)
        : String(Number(menuObj?.chapter) + 1)
    }`;
  }
};

const Nextbutton = ({ project }: NextbuttonProps) => {
  const router = useRouter();
  const {
    query: { slug },
  } = router;

  return (
    <div className={styles.nextbtn_container}>
      <Link href={matchNextPageURL(matchMenuinfo(project), slug)}>
        <a className={styles.next_btnWrap}>
          <div className={styles.next_btn}>다음 단계</div>
        </a>
      </Link>
      <img className={styles.illust} src="/images/ex.png" alt="dataduck" />
    </div>
  );
};

export default Nextbutton;
