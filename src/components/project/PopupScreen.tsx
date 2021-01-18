import styles from "./styles/PopupScreen.module.scss";
import Popup from "reactjs-popup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";

interface PopupScreenProps {
  child: React.ReactElement;
  isLogout: Boolean;
}

const PopupScreen = ({ child, isLogout }: PopupScreenProps) => {
  const isLogoutPopup: Boolean = isLogout;

  return (
    <Popup
      trigger={child}
      modal
      nested
      overlayStyle={{ backdropFilter: "blur(2px)" }}
    >
      {(close) => (
        <div className={styles.popup_wrap}>
          {isLogoutPopup ? (
            <div className={styles.logout_wrap}>
              <div className={styles.logout_message}>로그아웃 되었습니다</div>
              <div className={styles.logout_btn} onClick={close}>
                확인
              </div>
            </div>
          ) : (
            <div className={styles.profile_wrap}>
              <div className={styles.profile_title}>프로필 수정</div>
              <div className={styles.profile_imageWrap}>
                <div className={styles.profile_imageSection}>
                  <img
                    className={styles.profile_image}
                    src="/images/ex.png"
                    alt="ex"
                    width="150"
                    height="150"
                  />
                </div>
                <div className={styles.profile_imageEditBtn}>
                  <FontAwesomeIcon
                    className={styles.profile_editIcon}
                    icon={faPenNib}
                    size="lg"
                  />
                </div>
                <div className={styles.profile_imageEditBasic}>
                  기본 이미지로 변경
                </div>
              </div>
              <div className={styles.profile_inputWrap}>
                <input className={styles.profile_input} type="text" />
              </div>
              <div className={styles.profile_checkWrap}>
                <div className={styles.profile_checkbtn}>중복 확인</div>
              </div>
              <div className={styles.profile_btnWrap}>
                <div className={styles.profile_cancelbtn} onClick={close}>
                  취소
                </div>
                <div className={styles.profile_editbtn}>수정</div>
              </div>
            </div>
          )}
        </div>
      )}
    </Popup>
  );
};
export default PopupScreen;
