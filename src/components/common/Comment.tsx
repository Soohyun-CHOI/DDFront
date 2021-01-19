import styles from "./styles/Comment.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faComment, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import Recomment from "./Recomment";

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
          <div className={styles.comment_zone}>
            <div className={styles.comment_content}>
              <div className={styles.comment_data}>
                이것은 댓글입니다. 댓글댓글 댓글입니다이것은 댓글입니다.
                댓글댓글 댓글입니다이것은 댓글입니다. 댓글댓글 댓글입니다이것은
                댓글입니다. 댓글댓글 댓글입니다이것은 댓글입니다. 댓글댓글
                댓글입니다이것은 댓글입니다. 댓글댓글 댓글입니다이것은
                댓글입니다. 댓글댓글 댓글입니다이것은 댓글입니다. 댓글댓글
                댓글입니다
              </div>
              <div className={styles.comment_optionWrap}>
                <div className={styles.comment_recommentBtn}>
                  <FontAwesomeIcon
                    icon={faComment}
                    className={styles.comment_icon}
                  />
                  <li className={styles.comment_option}>답글</li>
                </div>
                <div className={styles.comment_editBtn}>
                  <FontAwesomeIcon
                    icon={faPenNib}
                    className={styles.comment_icon}
                  />
                  <li className={styles.comment_option}>수정</li>
                </div>
                <div className={styles.comment_deleteBtn}>
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    className={styles.comment_icon}
                  />
                  <li className={styles.comment_option}>삭제</li>
                </div>
              </div>
            </div>
            {/* 이 부분은 추후에 api로 데이터를 불러와서 map()으로 돌릴 예정 */}
            <div className={styles.recomment_zone}>
              <Recomment />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
