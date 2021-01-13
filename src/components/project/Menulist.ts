export const menuInfo = [
  {
    chapter: "00",
    name: "들어가기 전에",
  },
  {
    chapter: "01",
    name: "데이터 불러오기",
  },
  {
    chapter: "02",
    name: "EDA와 전처리",
    submenu: [
      { number: 1, name: "결측값" },
      { number: 2, name: "데이터프레임 병합하기" },
      { number: 3, name: "통계분석" },
    ],
  },
  {
    chapter: "03",
    name: "모델링",
    submenu: [
      { number: 1, name: "데이터 분리" },
      { number: 2, name: "Logistic Regression" },
      { number: 3, name: "Decision Tree" },
      { number: 4, name: "교차검증" },
      { number: 5, name: "Grid Search" },
      { number: 6, name: "결과 시각화하기" },
    ],
  },
  {
    chapter: "04",
    name: "최종 모델 선택",
    submenu: [
      { number: 1, name: "앙상블 모델" },
      { number: 2, name: "성능 비교하기" },
    ],
  },
  {
    chapter: "05",
    name: "마치면서",
  },
  {
    chapter: "+PLUS",
    name: "직접 해보기",
    plus: true,
  },
];
