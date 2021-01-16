import styles from "./styles/Main.module.scss";
import Banner from "./Banner";
import { BannerContent } from "./BannerContent";

const Main = () => {
  return (
    <>
      <div className={styles.main_wrap}>
        <img
          src="/images/ex.png"
          alt="ex"
          width="70%"
          className={styles.main_illust}
        />
        <div className={styles.main_title}>
          <span className={styles.main_highlight}>1시간</span>으로 끝내는 데이터
          분석 프로젝트
        </div>
      </div>
      {BannerContent.map((item, index) => (
        <Banner key={index} project={item.project} />
      ))}
    </>
  );
};

export default Main;
