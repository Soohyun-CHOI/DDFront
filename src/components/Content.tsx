import styles from "../../styles/Content.module.scss";

interface ContentProps {
  contentTitle: string;
  contentDetail: string;
  isContentImage?: boolean;
  difficulty_num?: number;
}

const Content = ({
  contentTitle,
  contentDetail,
  isContentImage,
  difficulty_num,
}: ContentProps) => {
  return (
    <div className={styles.content_wrap}>
      <div className={styles.content_title}>{contentTitle}</div>
      <br />
      {isContentImage ? (
        <div className={styles.content_imageWrap}>
          {[...Array(5)].map((item, index) => {
            if (index < difficulty_num) {
              return (
                <svg
                  key={index}
                  className={styles.content_image}
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="13.5" cy="13.5" r="13.5" fill="#5A9CA1" />
                </svg>
              );
            } else {
              return (
                <svg
                  key={index}
                  className={styles.content_image}
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="13.5"
                    cy="13.5"
                    r="13"
                    fill="white"
                    stroke="#DCDCDC"
                  />
                </svg>
              );
            }
          })}
          <div className={styles.content_detail}>{contentDetail}</div>
        </div>
      ) : (
        <div className={styles.content_detail}>{contentDetail}</div>
      )}
    </div>
  );
};

export default Content;
