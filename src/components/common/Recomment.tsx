import styles from "./styles/Recomment.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faComment, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";

const Recomment = () => {
  return (
    <div className={styles.recomment_wrap}>
      <div className={styles.recomment_dataSection}>
        <div className={styles.recomment_leftSection}>
          <img
            className={styles.recomment_userImage}
            src="/images/ex.png"
            alt="ex"
          />
        </div>
        <div className={styles.recomment_rightSection}>
          <div className={styles.recomment_username}>
            NEXON Lv1<span className={styles.recomment_time}>1분전</span>
          </div>
          <div className={styles.recomment_zone}>
            <div className={styles.recomment_content}>
              <div className={styles.recomment_data}>
                이것은 대댓글 입니당 이것은 대댓글 입니당이것은 대댓글
                입니당이것은 대댓글 입니당이것은 대댓글 입니당이것은 대댓글
                입니당이것은 대댓글 입니당이것은 대댓글 입니당이것은 대댓글
                입니당이것은 대댓글 입니당
              </div>
              {/* 혹시나 나중에 대댓글에도 수정,편집,제거 기능 넣을까봐 겁나서 ,, 냅둘게여 */}
              {/* <div className={styles.recomment_optionWrap}>
                <div className={styles.recomment_recommentBtn}>
                  <FontAwesomeIcon
                    icon={faComment}
                    className={styles.recomment_icon}
                  />
                  <li className={styles.recomment_option}>답글</li>
                </div>
                <div className={styles.recomment_editBtn}>
                  <FontAwesomeIcon
                    icon={faPenNib}
                    className={styles.recomment_icon}
                  />
                  <li className={styles.recomment_option}>수정</li>
                </div>
                <div className={styles.recomment_deleteBtn}>
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    className={styles.recomment_icon}
                  />
                  <li className={styles.recomment_option}>삭제</li>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recomment;
