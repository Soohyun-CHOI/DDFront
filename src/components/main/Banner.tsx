import styles from "./styles/Banner.module.scss";
import Link from "next/link";
import { BannerContent } from "./BannerContent";

interface BannerProps {
  project: string;
}

const matchBannerContent = (project: string) => {
  const BannerContentObj = BannerContent.filter(
      (item) => item.project === project
  )[0];
  return BannerContentObj.direction === "right" ? (
      <div className={styles.banner_wrap}>
        <div className={styles.banner_illust}>
          <img
              src={`${BannerContentObj.imgsrc}`}
              alt="ex"
              width="100%"
              height="100%"
          />
        </div>
        <div className={styles.banner_contentRight}>
          <div className={styles.banner_title}>{BannerContentObj.title}</div>
          <div className={styles.banner_subtitleRight}>
            {BannerContentObj.subtitle}
          </div>
          <Link href={`/${project}`}>
            <a className={styles.banner_buttonName}>
              <div className={styles.banner_button}>프로젝트 시작하기</div>
            </a>
          </Link>
        </div>
      </div>
  ) : (
      <div className={styles.banner_wrap}>
        <div className={styles.banner_contentLeft}>
          <div className={styles.banner_title}>{BannerContentObj.title}</div>
          <div className={styles.banner_subtitleLeft}>
            {BannerContentObj.subtitle}
          </div>
          <Link href={`/${project}`}>
            <a className={styles.banner_buttonName}>
              <div className={styles.banner_button}>프로젝트 시작하기</div>
            </a>
          </Link>
        </div>
        <div className={styles.banner_illust}>
          <img
              src={`${BannerContentObj.imgsrc}`}
              alt="ex"
              width="100%"
              height="100%"
          />
        </div>
      </div>
  );
};

const Banner = ({ project }: BannerProps) => {
  return matchBannerContent(project);
};

export default Banner;