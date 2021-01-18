import styles from "./styles/Navbar.module.scss";
import Link from "next/link";
import NavbarLayout from "./NavbarLayout";
import PopupScreen from "../project/PopupScreen";
import Popup from "reactjs-popup";
import { useState } from "react";

const Navbar = () => {
  const [isLogined, setIsLogined] = useState<Boolean>(true);
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
              <li className={styles.nav_li}>로그인</li>
              <li className={styles.nav_li}>회원가입</li>
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
                        isLogout={false}
                        child={
                          <div onClick={close} className={styles.profile_edit}>
                            프로필 수정
                          </div>
                        }
                      />
                      <PopupScreen
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
