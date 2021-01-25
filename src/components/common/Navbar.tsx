import styles from "./styles/Navbar.module.scss";
import Link from "next/link";
import NavbarLayout from "./NavbarLayout";
import PopupScreen from "./PopupScreen";
import Popup from "reactjs-popup";
import { useEffect, useState } from "react";
import { getBasicInformation } from "../../utils/authUtils";
import { getApi } from "../../services/api";

export const googleaddress =
  "https://accounts.google.com/o/oauth2/auth?client_id=979510034981-hd4l7ldbj43c64q16q1dbpmcqa3r417e.apps.googleusercontent.com&redirect_uri=http://127.0.0.1:3000/auth/social/callback/google-oauth2/&response_type=code&scope=email";
const Navbar = () => {
  const [isLogined, setIsLogined] = useState<Boolean>(false);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const getProfile = async () => {
      try {
        let Profile = await getApi("/api/v1/users/my_profile/");
        return Profile;
      } catch (e) {
        console.error(e);
      }
    };

    getBasicInformation().then((res) => {
      if (res) {
        setIsLogined(true);
      } else {
        setIsLogined(false);
      }
    });

    getProfile().then((res) => {
      if (res) {
        setUserProfile(res);
      } else {
        setUserProfile({
          nickname: "",
          phoneNumber: "",
          email: "",
          image: "",
          isConsentingEmail: false,
        });
      }
    });
  }, [isLogined]);

  return (
    <NavbarLayout>
      <div className={styles.nav_titleWrap}>
        <Link href="/">
          <a className={styles.nav_title}>DataDuck</a>
        </Link>
      </div>
      <div className={styles.nav_menu}>
        <div className={styles.nav_project}>프로젝트</div>
        <div className={styles.nav_authorize}>
          {!isLogined ? (
            <>
              <Link href={googleaddress}>
                <a className={styles.login_btn}>
                  <li className={styles.nav_li}>로그인</li>
                </a>
              </Link>
              <Link href={googleaddress}>
                <a className={styles.signup_btn}>
                  <li className={styles.nav_li}>회원가입</li>
                </a>
              </Link>
            </>
          ) : (
            // Popup이 SSR되지 않게 해줌
            <div suppressHydrationWarning={true}>
              {process.browser && (
                <Popup
                  trigger={
                    <li className={styles.nav_li} aria-describedby="popup-5">
                      더보기
                    </li>
                  }
                  position="bottom right"
                  nested
                >
                  {(close) => (
                    <div className={styles.popup_wrap}>
                      <PopupScreen
                        userProfile={userProfile}
                        isLogout={false}
                        child={
                          <div onClick={close} className={styles.profile_edit}>
                            프로필 수정
                          </div>
                        }
                      />
                      <PopupScreen
                        userProfile={userProfile}
                        isLogout={true}
                        child={<div className={styles.logout}>로그아웃</div>}
                      />
                    </div>
                  )}
                </Popup>
              )}
            </div>
          )}
        </div>
      </div>
    </NavbarLayout>
  );
};

export default Navbar;
