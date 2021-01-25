import styles from "./styles/Title.module.scss";
import Link from "next/link";
import { Lolbody_introduction } from "./BodyContentList";
import { useRouter } from "next/router";

interface TitleProps {
  project: string;
  subTitle: string;
  subTitle2?: string[];
  mainTitle: string;
}

const Title = ({ project, subTitle, subTitle2, mainTitle }: TitleProps) => {
  const router = useRouter();
  const isOverviewPath = Object.keys(router.query).length === 0 ? true : false;
  const isPlusPath = router.query?.slug?.includes("plus") ? true : false;
  return (
    <>
      <div className={styles.title_wrap}>
        <Link href={`/${project}`}>
          <a className={styles.sub_titleWrap}>
            <div className={styles.sub_title}>{subTitle}</div>
          </a>
        </Link>

        {/* 리모콘 메뉴 중 서브 메뉴가 추가로 있을 경우 */}
        {subTitle2 && (
          <Link href={`/${project}/${router.query.slug[0]}`}>
            <a className={styles.sub_titleWrap}>
              <div className={styles.sub_title}>
                <span>|</span>
                {`${subTitle2[0]}. ${subTitle2[1]}`}
              </div>
            </a>
          </Link>
        )}
        <div className={styles.main_title}>{mainTitle}</div>
      </div>
      {isOverviewPath && project === "lol" ? (
        <div className={styles.introduction}>
          {
            Lolbody_introduction.filter((item) => item.chapter === "00")[0]
              .introduction
          }
        </div>
      ) : null}
      {isPlusPath && project === "lol" ? (
        <div className={styles.introduction}>
          {
            Lolbody_introduction.filter((item) => item.chapter === "plus")[0]
              .introduction
          }
        </div>
      ) : null}
    </>
  );
};

export default Title;
