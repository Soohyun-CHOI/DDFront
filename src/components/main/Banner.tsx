import styles from "./styles/Banner.module.scss";
import Link from "next/link";

const Banner = () => {
  return (
    <div className={styles.banner_wrap}>
      <div className={styles.banner_illust}>
        <img src="/images/project_lol.jpg" alt="ex" width="100%" height="100%" />
      </div>
      <div className={styles.banner_content}>
        <div className={styles.banner_title}>LoL 승패 예측 프로젝트</div>
        <div className={styles.banner_subtitle}>
          LOL 데이터로 승패를 예측해보자 <br />
          어쩌구 저쩌구 두 줄 정도로 말 만들기
        </div>
        <Link href="/lol">
          <a className={styles.banner_buttonName}>
            <div className={styles.banner_button}>프로젝트 시작하기</div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
