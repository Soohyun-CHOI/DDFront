import styles from "../../styles/Title.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
interface TitleProps {
  subTitle: string;
  subTitle2?: string[];
  mainTitle: string;
  plusMenu?: boolean;
}

const Title = ({ plusMenu, subTitle, subTitle2, mainTitle }: TitleProps) => {
  const router = useRouter();
  const isOverviewPath = router.pathname === "/overview" ? true : false;
  return (
    <>
      <div className={styles.title_wrap}>
        <Link href="/overview">
          <a className={styles.sub_titleWrap}>
            <div className={styles.sub_title}>{subTitle}</div>
          </a>
        </Link>

        {/* 리모콘 메뉴 중 서브 메뉴가 추가로 있을 경우 */}
        {subTitle2 && (
          <Link href={`/lol/${router.query.slug[0]}`}>
            <a className={styles.sub_titleWrap}>
              <div
                className={styles.sub_title}
              >{`${subTitle2[0]}. ${subTitle2[1]}`}</div>
            </a>
          </Link>
        )}

        {/* 리모콘 메뉴 중 마지막 메뉴일 경우 */}
        {plusMenu ? (
          <div className={styles.main_title}>직접 해보는 LOL 승패 예측</div>
        ) : (
          <div className={styles.main_title}>{mainTitle}</div>
        )}
      </div>
      {isOverviewPath ? (
        <div className={styles.introduction}>
          Welcome to DataDuck! <br /> <br />
          이번 LOL 승패 예측 프로젝트에서, 우리는 인기 게임 ‘리그 오브
          레전드(LOL)’의 실제 게임 데이터로 데이터 분석의 과정을 알아보고, 직접
          데이터를 분석해보는 시간을 거질 것입니다.
        </div>
      ) : null}
    </>
  );
};

export default Title;
