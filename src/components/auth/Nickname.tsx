import styles from "./styles/Nickname.module.scss";

const Nickname = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nickname_wrap}>
        <div className={styles.illust_wrap}>
          <img src="/images/ex.png" alt="ex" width="300" />
        </div>
        <div className={styles.content_wrap}>
          <div className={styles.content_title}>
            닉네임을 설정하고 바로 시작해 보세요!
          </div>
          <div className={styles.content_inputSection}>
            <div className={styles.content_inputWrap}>
              <input type="text" className={styles.content_input} />
            </div>

            <div className={styles.content_checkDupbtn}>중복 확인</div>
          </div>
          <div className={styles.content_startbtn}>시작하기</div>
        </div>
      </div>
    </div>
  );
};

export default Nickname;
