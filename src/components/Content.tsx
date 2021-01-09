import styles from "../../styles/Content.module.scss";

interface ContentProps {
  contentTitle: string;
  contentDetail: string;
}

const Content: React.FC<ContentProps> = ({ contentTitle, contentDetail }) => {
  return (
    <div className={styles.content_wrap}>
      <div className={styles.content_title}>{contentTitle}</div>
      <br />
      <div className={styles.content_detail}>{contentDetail}</div>
    </div>
  );
};

export default Content;
