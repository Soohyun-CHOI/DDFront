import styles from "../../styles/Banner.module.css";
import Link from "next/link";

const Banner = () => {
  return (
    <div className={styles.banner_wrap}>
      <div className={styles.banner_illust}>
        <img src="/images/ex.png" alt="ex" width="100%" height="100%" />
      </div>
      <div className={styles.banner_content}>
        <div className={styles.banner_title}>
          <h2>LoL 승패 예측 프로젝트</h2>
        </div>
        <div className={styles.banner_subtitle}>
          LOL 데이터로 승패를 예측해보자
          <br />
          어쩌구 저쩌구 두 줄 정도로 말 만들기
        </div>
        <div className={styles.banner_button}>
          <Link href="/overview">
            <a className={styles.banner_buttonName}>프로젝트 시작하기</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
