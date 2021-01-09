import styles from "../../styles/Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer_wrap}>
      <div className={styles.footer_left}>
        <h3>데이타덕 DataDuck</h3>
        <span>© Copyright Daor. All right reserved.</span>
      </div>
      <div className={styles.footer_right}>개인정보보호방침</div>
    </div>
  );
};

export default Footer;
