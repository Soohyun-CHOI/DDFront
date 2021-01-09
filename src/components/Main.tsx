import styles from "../../styles/Main.module.css";
import Banner from "./Banner";

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
          1시간으로 끝내는 데이터 분석 프로젝트
        </div>
      </div>
      <Banner />
      <Banner />
    </>
  );
};

export default Main;
