import styles from "./styles/Togglebutton.module.scss";
import { Lolbody_toggle } from "./BodyContentList";
import { useRouter } from "next/router";
import { useState } from "react";

interface TogglebuttonProps {
  slug: string | string[];
  isSubmenu?: boolean;
}

const matchToggleObj = (project: string) => {
  switch (project) {
    case "lol":
      return Lolbody_toggle;
    default:
      return null;
  }
};

const toggleSwitch = (
  project: string,
  slug: string | string[],
  isSubmenu: boolean,
  statisClicked?: boolean,
  pythonClicked?: boolean,
  setStatisClicked?: (statis: boolean) => void,
  setPythonClicked?: (python: boolean) => void
) => {
  // 메인 메뉴에 토글이 들어갈 경우
  if (!isSubmenu) {
    const toggleObj = matchToggleObj(project).filter(
      (item) => item.chapter === slug[0]
    )[0] || {
      statistics: null,
      statisticsDes: null,
      python: null,
      pythonDes: null,
    };

    // 메인 메뉴에 통계와 파이썬 토글이 모두 들어갈 경우
    if (toggleObj["statistics"] && toggleObj["python"]) {
      return (
        <div className={styles.toggle_wrap}>
          <div className={styles.toggleBtn_wrap}>
            <div
              className={styles.statistics_toggle}
              onClick={(e) => {
                e.currentTarget.classList.toggle(
                  styles.statisticsToggle_selected
                );
                if (
                  e.currentTarget.classList.contains(
                    styles.statisticsToggle_selected
                  )
                ) {
                  setStatisClicked(true);
                } else {
                  setStatisClicked(false);
                }
              }}
            >
              통계
            </div>
            <div
              className={styles.python_toggle}
              onClick={(e) => {
                e.currentTarget.classList.toggle(styles.pythonToggle_selected);
                if (
                  e.currentTarget.classList.contains(
                    styles.pythonToggle_selected
                  )
                ) {
                  setPythonClicked(true);
                } else {
                  setPythonClicked(false);
                }
              }}
            >
              파이썬
            </div>
          </div>
          <div className={styles.toggleContent_wrap}>
            {statisClicked ? (
              <div className={styles.statisticsContent_wrap}>
                <div className={styles.statisticsContent_Title}>
                  <div className={styles.statisticsContent_subTitle}>
                    통계덕 TIP
                  </div>
                  <div className={styles.statisticsContent_mainTitle}>
                    {toggleObj["statistics"]}
                  </div>
                </div>
                <div className={styles.statisticsContent_Des}>
                  {toggleObj["statisticsDes"].map((des, index) =>
                    index !== toggleObj["statisticsDes"].length - 1
                      ? `${des}\n`
                      : `${des}`
                  )}
                </div>
              </div>
            ) : null}

            {pythonClicked ? (
              <div className={styles.pythonContent_wrap}>
                <div className={styles.pythonContent_Title}>
                  <div className={styles.pythonContent_subTitle}>
                    파이썬덕 TIP
                  </div>
                  <div className={styles.pythonContent_mainTitle}>
                    {toggleObj.python}
                  </div>
                </div>
                <div className={styles.pythonContent_Des}>
                  {toggleObj.pythonDes.map((des, index) =>
                    index !== toggleObj.pythonDes.length - 1
                      ? `${des}\n`
                      : `${des}`
                  )}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      );
    }
    // 메인 메뉴에 통계 토글만 들어갈 경우
    else if (toggleObj["statistics"] && !toggleObj["python"]) {
      return (
        <div className={styles.toggle_wrap}>
          <div className={styles.toggleBtn_wrap}>
            <div
              className={styles.statistics_toggle}
              onClick={(e) => {
                e.currentTarget.classList.toggle(
                  styles.statisticsToggle_selected
                );
                if (
                  e.currentTarget.classList.contains(
                    styles.statisticsToggle_selected
                  )
                ) {
                  setStatisClicked(true);
                } else {
                  setStatisClicked(false);
                }
              }}
            >
              통계
            </div>
          </div>
          <div className={styles.toggleContent_wrap}>
            {statisClicked ? (
              <div className={styles.statisticsContent_wrap}>
                <div className={styles.statisticsContent_Title}>
                  <div className={styles.statisticsContent_subTitle}>
                    통계덕 TIP
                  </div>
                  <div className={styles.statisticsContent_mainTitle}>
                    {toggleObj["statistics"]}
                  </div>
                </div>
                <div className={styles.statisticsContent_Des}>
                  {toggleObj["statisticsDes"].map((des, index) =>
                    index !== toggleObj["statisticsDes"].length - 1
                      ? `${des}\n`
                      : `${des}`
                  )}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      );
    }
    // 메인 메뉴에 파이썬 토글만 들어갈 경우
    else if (!toggleObj["statistics"] && toggleObj["python"]) {
      return (
        <div className={styles.toggle_wrap}>
          <div className={styles.toggleBtn_wrap}>
            <div
              className={styles.python_toggle}
              onClick={(e) => {
                e.currentTarget.classList.toggle(styles.pythonToggle_selected);
                if (
                  e.currentTarget.classList.contains(
                    styles.pythonToggle_selected
                  )
                ) {
                  setPythonClicked(true);
                } else {
                  setPythonClicked(false);
                }
              }}
            >
              파이썬
            </div>
          </div>
          <div className={styles.toggleContent_wrap}>
            {pythonClicked ? (
              <div className={styles.pythonContent_wrap}>
                <div className={styles.pythonContent_Title}>
                  <div className={styles.pythonContent_subTitle}>
                    파이썬덕 TIP
                  </div>
                  <div className={styles.pythonContent_mainTitle}>
                    {toggleObj["python"]}
                  </div>
                </div>
                <div className={styles.pythonContent_Des}>
                  {toggleObj["pythonDes"].map((des, index) =>
                    index !== toggleObj["pythonDes"].length - 1
                      ? `${des}\n`
                      : `${des}`
                  )}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      );
    } else return null;
  }
  // 서브 메뉴에 토글이 들어갈 경우
  else {
    const toggleObj = matchToggleObj(project)
      .filter((item) => item.chapter === slug[0] && item.submenu)[0]
      ?.submenu.filter((item) => item.number === Number(slug[1]))[0] || {
      statistics: null,
      statisticsDes: null,
      python: null,
      pythonDes: null,
    };

    // 서브 메뉴에 통계와 파이썬 토글이 모두 들어갈 경우
    if (toggleObj["statistics"] && toggleObj["python"]) {
      return (
        <div className={styles.toggle_wrap}>
          <div className={styles.toggleBtn_wrap}>
            <div
              className={styles.statistics_toggle}
              onClick={(e) => {
                e.currentTarget.classList.toggle(
                  styles.statisticsToggle_selected
                );
                if (
                  e.currentTarget.classList.contains(
                    styles.statisticsToggle_selected
                  )
                ) {
                  setStatisClicked(true);
                } else {
                  setStatisClicked(false);
                }
              }}
            >
              통계
            </div>
            <div
              className={styles.python_toggle}
              onClick={(e) => {
                e.currentTarget.classList.toggle(styles.pythonToggle_selected);
                if (
                  e.currentTarget.classList.contains(
                    styles.pythonToggle_selected
                  )
                ) {
                  setPythonClicked(true);
                } else {
                  setPythonClicked(false);
                }
              }}
            >
              파이썬
            </div>
          </div>
          <div className={styles.toggleContent_wrap}>
            {statisClicked ? (
              <div className={styles.statisticsContent_wrap}>
                <div className={styles.statisticsContent_Title}>
                  <div className={styles.statisticsContent_subTitle}>
                    통계덕 TIP
                  </div>
                  <div className={styles.statisticsContent_mainTitle}>
                    {toggleObj["statistics"]}
                  </div>
                </div>
                <div className={styles.statisticsContent_Des}>
                  {toggleObj["statisticsDes"].map((des, index) =>
                    index !== toggleObj["statisticsDes"].length - 1
                      ? `${des}\n`
                      : `${des}`
                  )}
                </div>
              </div>
            ) : null}

            {pythonClicked ? (
              <div className={styles.pythonContent_wrap}>
                <div className={styles.pythonContent_Title}>
                  <div className={styles.pythonContent_subTitle}>
                    파이썬덕 TIP
                  </div>
                  <div className={styles.pythonContent_mainTitle}>
                    {toggleObj["python"]}
                  </div>
                </div>
                <div className={styles.pythonContent_Des}>
                  {toggleObj["pythonDes"].map((des, index) =>
                    index !== toggleObj["pythonDes"].length - 1
                      ? `${des}\n`
                      : `${des}`
                  )}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      );
    }

    // 서브 메뉴에 통계 토글만 들어갈 경우
    else if (toggleObj["statistics"] && !toggleObj["python"]) {
      return (
        <div className={styles.toggle_wrap}>
          <div className={styles.toggleBtn_wrap}>
            <div
              className={styles.statistics_toggle}
              onClick={(e) => {
                e.currentTarget.classList.toggle(
                  styles.statisticsToggle_selected
                );
                if (
                  e.currentTarget.classList.contains(
                    styles.statisticsToggle_selected
                  )
                ) {
                  setStatisClicked(true);
                } else {
                  setStatisClicked(false);
                }
              }}
            >
              통계
            </div>
          </div>
          <div className={styles.toggleContent_wrap}>
            {statisClicked ? (
              <div className={styles.statisticsContent_wrap}>
                <div className={styles.statisticsContent_Title}>
                  <div className={styles.statisticsContent_subTitle}>
                    통계덕 TIP
                  </div>
                  <div className={styles.statisticsContent_mainTitle}>
                    {toggleObj["statistics"]}
                  </div>
                </div>
                <div className={styles.statisticsContent_Des}>
                  {toggleObj["statisticsDes"].map((des, index) =>
                    index !== toggleObj["statisticsDes"].length - 1
                      ? `${des}\n`
                      : `${des}`
                  )}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      );
    }

    // 서브 메뉴에 파이썬 토글만 들어갈 경우
    else if (!toggleObj["statistics"] && toggleObj["python"]) {
      return (
        <div className={styles.toggle_wrap}>
          <div className={styles.toggleBtn_wrap}>
            <div
              className={styles.python_toggle}
              onClick={(e) => {
                e.currentTarget.classList.toggle(styles.pythonToggle_selected);
                if (
                  e.currentTarget.classList.contains(
                    styles.pythonToggle_selected
                  )
                ) {
                  setPythonClicked(true);
                } else {
                  setPythonClicked(false);
                }
              }}
            >
              파이썬
            </div>
          </div>
          <div className={styles.toggleContent_wrap}>
            {pythonClicked ? (
              <div className={styles.pythonContent_wrap}>
                <div className={styles.pythonContent_Title}>
                  <div className={styles.pythonContent_subTitle}>
                    파이썬덕 TIP
                  </div>
                  <div className={styles.pythonContent_mainTitle}>
                    {toggleObj["python"]}
                  </div>
                </div>
                <div className={styles.pythonContent_Des}>
                  {toggleObj["pythonDes"].map((des, index) =>
                    index !== toggleObj["pythonDes"].length - 1
                      ? `${des}\n`
                      : `${des}`
                  )}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      );
    } else return null;
  }
};

const Togglebutton = ({ slug, isSubmenu }: TogglebuttonProps) => {
  const [statisClicked, setStatisClicked] = useState<boolean>(false);
  const [pythonClicked, setPythonClicked] = useState<boolean>(false);

  const router = useRouter();
  const project = router.pathname
    .replace(/\//gi, "")
    .replace("[[...slug]]", "");
  return toggleSwitch(
    project,
    slug,
    isSubmenu,
    statisClicked,
    pythonClicked,
    setStatisClicked,
    setPythonClicked
  );
};

export default Togglebutton;
