import Content from "../src/components/Content";
import Layout from "../src/components/Layout";
import Title from "../src/components/Title";

// const Props = {
//   subTitle: "00. 들어가기 전에",
//   mainTitle: "LOL 승패 예측 프로젝트",
// };

const subTitle = "00. 들어가기 전에";
const mainTitle = "LOL 승패 예측 프로젝트";
const contentTitle1 = "LOL이란?";
const contentDetail1 =
  "아마 여러분은 이미 LOL을 해보셨거나, 적어도 이름 정도는 들어보셨을 것입니다. \n그러고 보니 병헌오빠가 우리 오버뷰 최종본을 안 줬어요. 왜 받아야 하는 걸 생각 못했지 똥멍청이! 이렇게 줄줄 오버뷰 설명이 적힐 겁니다. 전체를 써봐야 느낌을 보기 좋을 것 같긴 한데 넘모 귀찮으니 그냥 복붙하겠어유.";
const contentTitle2 = "무엇을 하나요?";
const contentDetail2 =
  "아마 여러분은 이미 LOL을 해보셨거나, 적어도 이름 정도는 들어보셨을 것입니다. 그러고 보니 병헌오빠가 우리 오버뷰 최종본을 안 줬어요. 왜 받아야 하는 걸 생각 못했지 똥멍청이! 이렇게 줄줄 오버뷰 설명이 적힐 겁니다. 전체를 써봐야 느낌을 보기 좋을 것 같긴 한데 넘모 귀찮으니 그냥 복붙하겠어유. 아마 여러분은 이미 LOL을 해보셨거나, 적어도 이름 정도는 들어보셨을 것입니다. 그러고 보니 병헌오빠가 우리 오버뷰 최종본을 안 줬어요. 왜 받아야 하는 걸 생각 못했지 똥멍청이! 이렇게 줄줄 오버뷰 설명이 적힐 겁니다. 전체를 써봐야 느낌을 보기 좋을 것 같긴 한데 넘모 귀찮으니 그냥 복붙하겠어유.";
const contentTitle3 = "어떤 데이터를 사용하나요?";
const contentDetail3 =
  "아마 여러분은 이미 LOL을 해보셨거나, 적어도 이름 정도는 들어보셨을 것입니다. 그러고 보니 병헌오빠가 우리 오버뷰 최종본을 안 줬어요. 왜 받아야 하는 걸 생각 못했지 똥멍청이! 이렇게 줄줄 오버뷰 설명이 적힐 겁니다. 전체를 써봐야 느낌을 보기 좋을 것 같긴 한데 넘모 귀찮으니 그냥 복붙하겠어유.";

const Overview: React.FC = () => {
  return (
    <Layout>
      <Title subTitle={subTitle} mainTitle={mainTitle} />
      <Content contentTitle={contentTitle1} contentDetail={contentDetail1} />
      <Content contentTitle={contentTitle2} contentDetail={contentDetail2} />
      <Content contentTitle={contentTitle3} contentDetail={contentDetail3} />
    </Layout>
  );
};

export default Overview;
