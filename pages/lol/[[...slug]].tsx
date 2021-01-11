import { useRouter } from "next/router";
import LayoutSection from "../../src/components/project/LayoutSection";
import Title from "../../src/components/project/Title";

const subTitle = "LOL 승패 예측 프로젝트";
let subTitle2;
const mainTitle = {
  "01": "데이터 불러오기",
  "02": "EDA와 전처리",
  "03": "모델링",
  "04": "최종 모델 선택",
  "05": "마치면서",
  "+PLUS": "직접 해보기",
};

const matchTitle = (slug: string | string[]): JSX.Element => {
  if (slug.length < 2) {
    // 리모콘 메뉴 중 마지막 메뉴일 경우
    if (slug[0] === "plus") {
      subTitle2 = Object.entries(mainTitle).filter(
        (item) => item.includes("+" + slug[0].toUpperCase()) // mainTitle의 key는 'PLUS' 이므로 'plus'를 대문자로 변환
      )[0];
      return (
        <Title
          plusMenu={true}
          subTitle={subTitle}
          subTitle2={subTitle2}
          mainTitle={mainTitle[slug[0]]}
        />
      );
    }
    return <Title subTitle={subTitle} mainTitle={mainTitle[slug[0]]} />;
  } else {
    subTitle2 = Object.entries(mainTitle).filter((item) =>
      item.includes(slug[0])
    )[0];
    return (
      <Title
        subTitle={subTitle}
        subTitle2={subTitle2}
        mainTitle={mainTitle[slug[0]]}
      />
    );
  }
};

const View = () => {
  const router = useRouter();
  const slug = router.query.slug || [];

  return <LayoutSection>{matchTitle(slug)}</LayoutSection>;
};

export default View;
