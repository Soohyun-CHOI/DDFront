import styles from "../../styles/Title.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
interface TitleProps {
  subTitle: string;
  mainTitle: string;
}

const Title: React.FC<TitleProps> = ({ subTitle, mainTitle }) => {
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
        <div className={styles.main_title}>{mainTitle}</div>
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
