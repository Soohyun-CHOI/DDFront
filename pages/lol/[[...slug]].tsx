import { useRouter } from "next/router";
import LayoutSection from "../../src/components/LayoutSection";
import Title from "../../src/components/Title";

const subTitle = "LOL 승패 예측 프로젝트";
const mainTitle = {
  "01": "데이터 불러오기",
  "02": "EDA와 전처리",
  "03": "모델링",
  "04": "최종 모델 선택",
  "05": "마치면서",
};

const matchMainTitle = (slug) => {
  switch (slug[0]) {
    case "01":
      return <Title subTitle={subTitle} mainTitle={mainTitle["01"]} />;
    case "02":
      return <Title subTitle={subTitle} mainTitle={mainTitle["02"]} />;
    case "03":
      return <Title subTitle={subTitle} mainTitle={mainTitle["03"]} />;
    case "04":
      return <Title subTitle={subTitle} mainTitle={mainTitle["04"]} />;
    case "05":
      return <Title subTitle={subTitle} mainTitle={mainTitle["05"]} />;
  }
};

const View: React.FC = () => {
  const router = useRouter();
  const slug = router.query.slug || [];

  return <LayoutSection>{matchMainTitle(slug)}</LayoutSection>;
};

export default View;
