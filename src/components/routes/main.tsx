import styles from "../../../styles/main.module.css";

const Main = () => {
  return (
    <div className={styles.main_wrap}>
      <img
        src="/images/ex.png"
        alt="ex"
        width="70%"
        className={styles.main_illust}
      />
      <h2>1시간으로 끝내는 데이터 분석 프로젝트</h2>
    </div>
  );
};

export default Main;
