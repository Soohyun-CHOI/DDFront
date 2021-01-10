import styles from "../../styles/Main.module.scss";
import Banner from "./Banner";

const Main: React.FC = () => {
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
            <span className={styles.main_highlight}>1시간</span>으로 끝내는 데이터 분석 프로젝트
        </div>
      </div>
      <Banner />
      <Banner />
    </>
  );
};

export default Main;
