import Content from "../src/components/Content";
import Title from "../src/components/Title";
import Link from "next/link";
import styles from "./styles/overview.module.scss";
import LayoutSection from "../src/components/LayoutSection";

const subTitle = "00. 들어가기 전에"; // 메인 메뉴의 서브 타이틀
const mainTitle = "LOL 승패 예측 프로젝트";

const contentTitle1 = "LOL이란?";
const contentDetail1 =
  "아마 여러분은 이미 LOL을 해보셨거나, 적어도 이름 정도는 들어보셨을 것입니다.\n그러고 보니 병헌오빠가 우리 오버뷰 최종본을 안 줬어요. 왜 받아야 하는 걸 생각 못했지 똥멍청이! 이렇게 줄줄 오버뷰 설명이 적힐 겁니다. 전체를 써봐야 느낌을 보기 좋을 것 같긴 한데 넘모 귀찮으니 그냥 복붙하겠어유.";

const contentTitle2 = "무엇을 하나요?";
const contentDetail2 =
  "아마 여러분은 이미 LOL을 해보셨거나, 적어도 이름 정도는 들어보셨을 것입니다.\n그러고 보니 병헌오빠가 우리 오버뷰 최종본을 안 줬어요. 왜 받아야 하는 걸 생각 못했지 똥멍청이! 이렇게 줄줄 오버뷰 설명이 적힐 겁니다. 전체를 써봐야 느낌을 보기 좋을 것 같긴 한데 넘모 귀찮으니 그냥 복붙하겠어유.\n\n아마 여러분은 이미 LOL을 해보셨거나, 적어도 이름 정도는 들어보셨을 것입니다.\n그러고 보니 병헌오빠가 우리 오버뷰 최종본을 안 줬어요. 왜 받아야 하는 걸 생각 못했지 똥멍청이! 이렇게 줄줄 오버뷰 설명이 적힐 겁니다. 전체를 써봐야 느낌을 보기 좋을 것 같긴 한데 넘모 귀찮으니 그냥 복붙하겠어유.";

const contentTitle3 = "어떤 데이터를 사용하나요?";
const contentDetail3 =
  "아마 여러분은 이미 LOL을 해보셨거나, 적어도 이름 정도는 들어보셨을 것입니다.\n그러고 보니 병헌오빠가 우리 오버뷰 최종본을 안 줬어요. 왜 받아야 하는 걸 생각 못했지 똥멍청이! 이렇게 줄줄 오버뷰 설명이 적힐 겁니다. 전체를 써봐야 느낌을 보기 좋을 것 같긴 한데 넘모 귀찮으니 그냥 복붙하겠어유.";

let difficulty_num = 1; // 난이도 번호(1~5)

const contentTitle4 = "추천 난이도";
const contentDetail4 = "데이터 분석이 처음이라도 할 수 있어요!";

const contentTitle5 = "어떻게 시작하나요?";
const contentDetail5 =
  "지금 바로 프로젝트에 참여하고 싶으시다고요? 그렇다면 ‘시작하기’를 눌러주세요!";

const Overview = () => {
  return (
    <LayoutSection>
      <Title subTitle={subTitle} mainTitle={mainTitle} />
      <Content contentTitle={contentTitle1} contentDetail={contentDetail1} />
      <Content contentTitle={contentTitle2} contentDetail={contentDetail2} />
      <Content contentTitle={contentTitle3} contentDetail={contentDetail3} />
      <Link href="/">
        <a className={styles.download_btnWrap}>
          <div className={styles.download_btn}>다운로드</div>
        </a>
      </Link>
      <Content
        contentTitle={contentTitle4}
        contentDetail={contentDetail4}
        isContentImage={true} // 난이도 나타내는 이미지가 들어가는 컨텐츠인지
        difficulty_num={difficulty_num}
      />
      <Content contentTitle={contentTitle5} contentDetail={contentDetail5} />
      <Link href="/lol/[...slug]" as="/lol/01">
        <a className={styles.start_btnWrap}>
          <div className={styles.start_btn}>시작하기</div>
        </a>
      </Link>
    </LayoutSection>
  );
};
export default Overview;
