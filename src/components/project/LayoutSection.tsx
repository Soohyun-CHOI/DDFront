import styles from "./styles/LayoutSection.module.scss";
import Menu from "./Menu";
import Remocon from "./Remocon";

interface Props {
  children: React.ReactNode;
}

const menuInfo0 = {
  chapter: "00",
  name: "들어가기 전에",
};

const menuInfo1 = {
  chapter: "01",
  name: "데이터 불러오기",
};

const menuInfo2 = {
  chapter: "02",
  name: "EDA와 전처리",
};

const menuInfo3 = {
  chapter: "03",
  name: "모델링",
};

const menuInfo4 = {
  chapter: "04",
  name: "최종 모델 선택",
};

const menuInfo5 = {
  chapter: "05",
  name: "마치면서",
};

const menuInfo6 = {
  chapter: "+PLUS",
  name: "직접 해보기",
  plus: true,
};

const Submenu2 = [
  { chapter: "02", number: 1, name: "결측값" },
  { chapter: "02", number: 2, name: "데이터프레임 병합하기" },
  { chapter: "02", number: 3, name: "통계분석" },
];

const Submenu3 = [
  { chapter: "03", number: 1, name: "데이터 분리" },
  { chapter: "03", number: 2, name: "Logistic Regression" },
  { chapter: "03", number: 3, name: "Decision Tree" },
  { chapter: "03", number: 4, name: "교차검증" },
  { chapter: "03", number: 5, name: "Grid Search" },
  { chapter: "03", number: 6, name: "결과 시각화하기" },
];

const Submenu4 = [
  { chapter: "04", number: 1, name: "앙상블 모델" },
  { chapter: "04", number: 2, name: "성능 비교하기" },
];

const LayoutSection = ({ children }: Props) => {
  return (
    <>
      <div className={styles.section_wrap}>
        <div className={styles.section_left}>{children}</div>
        <div className={styles.section_right}>
          <Remocon>
            <Menu menuInfo={menuInfo0} />
            <Menu menuInfo={menuInfo1} />
            <Menu menuInfo={menuInfo2} submenu={Submenu2} />
            <Menu menuInfo={menuInfo3} submenu={Submenu3} />
            <Menu menuInfo={menuInfo4} submenu={Submenu4} />
            <Menu menuInfo={menuInfo5} />
            <Menu menuInfo={menuInfo6} />
          </Remocon>
        </div>
      </div>
    </>
  );
};

export default LayoutSection;
