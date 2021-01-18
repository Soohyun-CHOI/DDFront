import styles from "./styles/Comment.module.scss";

const Comment = () => {
  const isLogined: Boolean = false;

  return (
    <div className={styles.comment_wrap}>
      <div className={styles.comment_inputSection}>
        <div className={styles.comment_number}>댓글 0</div>
        {isLogined ? (
          <textarea
            className={styles.comment_input}
            name="comment"
            id="comment"
            placeholder="댓글을 작성해 보세요."
          />
        ) : (
          <textarea
            className={styles.comment_input}
            name="comment"
            id="comment"
            placeholder="구글 로그인 후 댓글을 작성해 보세요."
          />
        )}
      </div>
      <div className={styles.comment_dataSection}>
        <div className={styles.comment_leftSection}>
          <img
            className={styles.comment_userImage}
            src="/images/ex.png"
            alt="ex"
          />
        </div>
        <div className={styles.comment_rightSection}>
          <div className={styles.comment_username}>
            NEXON Lv2<span className={styles.comment_time}>3분전</span>
          </div>
          <div className={styles.comment_data}>
            이것은 댓글입니다. 댓글댓글 댓글입니다. 이것은 댓글입니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
