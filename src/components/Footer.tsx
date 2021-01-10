import styles from "../../styles/Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer_wrap}>
      <div className={styles.footer_left}>
        <div className={styles.footer_logo}>데이타덕 DataDuck</div>
        <div className={styles.footer_copyright}>© 2021 Daor. All right reserved.</div>
      </div>
      <div className={styles.footer_right}>개인정보보호방침</div>
    </div>
  );
};

export default Footer;
