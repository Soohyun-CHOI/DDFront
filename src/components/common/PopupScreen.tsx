import styles from "./styles/PopupScreen.module.scss";
import Popup from "reactjs-popup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { getApi, postApi, putApi, api } from "../../services/api";
import Router from "next/router";
import { useEffect, useRef, useState } from "react";

interface PopupScreenProps {
  child: React.ReactElement;
  isLogout: Boolean;
  userProfile?: {
    nickname: string;
    phoneNumber: string;
    email: string;
    image: string;
    isConsentingEmail: boolean;
  };
}

const PopupScreen = ({ child, isLogout, userProfile }: PopupScreenProps) => {
  // isLogoutPopup ? 로그아웃 : 프로필 수정
  const isLogoutPopup: Boolean = isLogout;
  const [info, setInfo] = useState("닉네임을 입력해주세요.");
  const [isCheckBtnClicked, setIsCheckBtnClicked] = useState(false);
  const [checkResult, setCheckResult] = useState("");
  const [nickname, setNickname] = useState("");
  const [isNicknameAllowed, setIsNicknameAllowed] = useState(false);
  const specialCheck = /[`~!@#$%^&*|\\\'\";:\/?]/;
  const [image, setImage] = useState();
  const [isImageChanged, setIsImageChanged] = useState(false);
  const [isNicknameChanged, setIsNicknameChanged] = useState(false);
  const inputEl = useRef(null);
  const fileInputEl = useRef(null);
  const imgRef = useRef(null);

  const logout = () => {
    console.log("로그아웃 실행됨");
    localStorage.removeItem("DD_access");
    Router.reload();
  };

  const fileInputClick = () => {
    fileInputEl.current.click();
  };

  const fileInputChange = (e) => {
    setImage(e.target.files[0]);
    setIsImageChanged(true);
    imgRef.current.src = URL.createObjectURL(e.target.files[0]);
  };

  // const changeDefaultImgClicked = (e) => {
  //   imgRef.current.src = "images/profile.jpg";
  //   setIsImageChanged(true);
  //   console.log(imgRef.current);
  // };

  const submit = async () => {
    // 프로필 사진만 변경했을 경우
    if (isImageChanged && !isNicknameChanged) {
      let fileData = new FormData();
      fileData.append("image", image);
      try {
        await putApi(`/api/v1/users/my_profile/`, fileData);
        alert("프로필이 수정되었습니다.");
        setIsImageChanged(false);
      } catch (e) {
        console.log(e);
      }
    }

    // 닉네임만 변경했을 경우
    else if (!isImageChanged && isNicknameChanged) {
      if (!isNicknameAllowed) {
        alert("닉네임을 확인해주세요");
      } else {
        try {
          putApi("api/v1/users/my_profile/", {
            nickname,
          });
          setCheckResult("");
          inputEl.current.value = "";
          alert("프로필이 수정되었습니다.");
          setIsNicknameChanged(false);
        } catch {
          alert("오류가 발생했습니다. 닉네임을 다시 작성해주세요.");
        }
      }
    }

    // 프로필 사진, 닉네임 모두 변경했을 경우
    else {
      if (!isNicknameAllowed) {
        alert("닉네임을 확인해주세요");
      } else {
        try {
          let fileData = new FormData();
          fileData.append("image", image);
          fileData.append("nickname", nickname);
          putApi("api/v1/users/my_profile/", fileData);
          setCheckResult("");
          setIsImageChanged(false);
          setIsNicknameChanged(false);
          inputEl.current.value = "";
          alert("프로필이 수정되었습니다.");
        } catch {
          alert("오류가 발생했습니다. 프로필을 다시 작성해주세요.");
        }
      }
    }
  };

  const checkDuplication = async () => {
    try {
      // 닉네임을 입력하지 않았을 경우
      if (info === "닉네임을 입력해주세요.") {
        setIsCheckBtnClicked(true);
        setCheckResult("닉네임을 입력해주세요.");
      } else {
        const response = await api.post(`api/v1/users/check_nickname/`, {
          nickname,
        });
        if (isNicknameAllowed) {
          if (response.data.exist) {
            // alert("이미 사용 중인 닉네임입니다.");
            setInfo("다른 닉네임을 입력해주세요.");
            setIsCheckBtnClicked(true);
            setCheckResult("이미 존재하는 닉네임입니다.");
          } else {
            setIsNicknameAllowed(true);
            // alert("사용 가능한 닉네임입니다.");
            setInfo("사용 가능한 닉네임입니다.");
            setIsCheckBtnClicked(true);
            setCheckResult("사용 가능한 닉네임입니다.");
          }
        } else {
          setIsCheckBtnClicked(true);
          setCheckResult(info);
        }
      }
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const checkNickname = async (e) => {
    const value = e.target.value;
    setNickname(value);
    setIsNicknameAllowed(false);
    setIsNicknameChanged(true);

    let nickLength = 0;
    if (value) {
      for (let i = 0; i < value.length; i++) {
        //한글은 2, 영문은 1로 치환
        const nick = value.charAt(i);
        if (escape(nick).length > 4) {
          nickLength += 2;
        } else {
          nickLength += 1;
        }
      }
    }

    if (value == null || value == "") {
      setInfo("닉네임을 입력해주세요.");
    } else if (value.search(/\s/) != -1) {
      setInfo("닉네임은 빈 칸을 포함할 수 없습니다.");
    } else if (nickLength < 2 || nickLength > 16) {
      setInfo("닉네임은 한글 1~8자, 영문 및 숫자 2~16자입니다.");
    } else if (specialCheck.test(value)) {
      setInfo("닉네임은 '_, -'를 제외한 특수문자를 포함할 수 없습니다.");
    } else {
      setIsNicknameAllowed(true);
    }
  };
  return (
    <Popup
      trigger={child}
      modal
      nested
      overlayStyle={{ backdropFilter: "blur(2.5px)" }}
      onClose={() => {
        setCheckResult("");
        setIsCheckBtnClicked(false);
        setInfo("닉네임을 입력해주세요.");
        setIsNicknameChanged(false);
        setIsImageChanged(false);
      }}
    >
      {(close) => (
        <div className={styles.popup_wrap}>
          {isLogoutPopup ? (
            <div className={styles.logout_wrap}>
              <div className={styles.logout_message}>
                정말 로그아웃 하시겠습니까?
              </div>
              <div className={styles.logout_btn} onClick={logout}>
                확인
              </div>
            </div>
          ) : (
            <div className={styles.profile_wrap}>
              <div className={styles.profile_title}>프로필 수정</div>
              <div className={styles.profile_imageWrap}>
                <div className={styles.profile_imageSection}>
                  <img
                    ref={imgRef}
                    className={styles.profile_image}
                    src={`http://localhost:8000${userProfile.image}`}
                    // src={"images/profile.jpg"}
                    alt="ex"
                    width="150"
                    height="150"
                  />
                </div>

                <div
                  className={styles.profile_imageEditBtn}
                  onClick={fileInputClick}
                >
                  <input
                    ref={fileInputEl}
                    type="file"
                    name="profile"
                    id="profile"
                    className={styles.profile_imageEditInput}
                    onChange={(e) => fileInputChange(e)}
                  />
                  <FontAwesomeIcon
                    className={styles.profile_editIcon}
                    icon={faPenNib}
                    size="lg"
                  />
                </div>
                {/* <div
                  className={styles.profile_imageEditBasic}
                  onClick={(e) => changeDefaultImgClicked(e)}
                >
                  기본 이미지로 변경
                </div> */}
              </div>
              <div className={styles.profile_middleWrap}>
                <div className={styles.profile_inputWrap}>
                  <input
                    ref={inputEl}
                    className={styles.profile_input}
                    type="text"
                    onChange={checkNickname}
                  />
                </div>
                <div className={styles.profile_checkWrap}>
                  {isCheckBtnClicked &&
                  checkResult === "사용 가능한 닉네임입니다." ? (
                    <div className={styles.check_resultTrue}>{checkResult}</div>
                  ) : (
                    <div className={styles.check_resultFalse}>
                      {checkResult}
                    </div>
                  )}
                  <div
                    className={styles.profile_checkbtn}
                    onClick={checkDuplication}
                  >
                    중복 확인
                  </div>
                </div>
              </div>
              <div className={styles.profile_btnWrap}>
                <div className={styles.profile_cancelbtn} onClick={close}>
                  취소
                </div>
                <div className={styles.profile_editbtn} onClick={submit}>
                  수정
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </Popup>
  );
};
export default PopupScreen;
