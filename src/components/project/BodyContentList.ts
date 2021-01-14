export const Lolbody_title = [
  { chapter: "01", title: "데이터 분리" },
  {
    chapter: "04",
    title: "챕터4 메인타이틀",
    submenu: [{ number: 1, title: "챕터4-1 서브타이틀" }],
  },
];

export const Lolbody_description = [
  {
    chapter: "01",
    description: [
      "모델링에 앞서 데이터를 모델학습에 사용하기 위해 X, Y로 나눠줍니다.",
      "wins를 제외한 컬럼은 입력값으로 사용하고, wins는 타겟값으로 사용합니다.",
      "입력값은 df_X, 타겟 값은 df_Y로 선언합니다.",
    ],
  },
  {
    chapter: "04",
    description: [
      "모델링에 앞서 데이터를 모델학습에 사용하기 위해 X, Y로 나눠줍니다.",
      "wins를 제외한 컬럼은 입력값으로 사용하고, wins는 타겟값으로 사용합니다.",
      "입력값은 df_X, 타겟 값은 df_Y로 선언합니다.",
    ],
    submenu: [
      {
        number: 1,
        description: [
          "SUB모델링에 앞서 데이터를 모델학습에 사용하기 위해 X, Y로 나눠줍니다.",
          "SUBwins를 제외한 컬럼은 입력값으로 사용하고, wins는 타겟값으로 사용합니다.",
          "SUB입력값은 df_X, 타겟 값은 df_Y로 선언합니다.",
        ],
      },
    ],
  },
];

export const Lolbody_codebox = [
  {
    chapter: "01",
    codebox: true,
  },
  {
    chapter: "03",
    codebox: false,
    submenu: [
      {
        number: 1,
        codebox: true,
      },
    ],
  },
];

export const Lolbody_toggle = [
  {
    chapter: "01",
    statistics: "데이터 분리",
    statisticsDes: [
      "상관계수는 블라블라",
      "블라블라블라블라 난 몰라유 궁시렁 몰라유",
      "법률가처럼 사고하는 법 율촌 법이론연구총서",
    ],
    python: ".head()",
    pythonDes: [
      "상관계수는 블라블라",
      "블라블라블라블라 난 몰라유 궁시렁 몰라유",
      "법률가처럼 사고하는 법 율촌 법이론연구총서",
    ],
  },
];
