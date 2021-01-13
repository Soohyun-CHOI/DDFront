import { useRouter } from "next/router";
import LayoutSection from "../../src/components/project/LayoutSection";
import Overview from "../../src/components/project/overview";
import Title from "../../src/components/project/Title";
import { menuInfo } from "../../src/components/project/Menulist";
import Video from "../../src/components/project/Video";

const subTitle = "LOL 승패 예측 프로젝트";
let subTitle2;
let mainTitle;

const matchVideo = (slug: string | string[]): JSX.Element => {
  // 메인 메뉴에서 Video 컴포넌트를 사용해야 할 때
  if (slug.length === 1) {
    switch (slug[0]) {
      case "01":
        return <Video key={slug[0]} />;
      default:
        return;
    }
  }
};

const matchTitle = (slug: string | string[]): JSX.Element => {
  if (slug.length < 2) {
    // 경로가 /lol 일때 overview 페이지(컴포넌트) 띄움
    if (slug.length === 0) {
      return <Overview key="overview" />;
    }
    // 리모콘 메뉴 중 마지막 메뉴일 경우
    if (slug[0] === "plus") {
      subTitle2 = [
        menuInfo[menuInfo.length - 1].chapter,
        menuInfo[menuInfo.length - 1].name,
      ];
      return (
        <Title
          key="plusmenu"
          subTitle={subTitle}
          subTitle2={subTitle2}
          mainTitle="직접 해보는 LOL 승패 예측"
        />
      );
    }
    mainTitle = menuInfo.filter((menu) => menu.chapter === slug[0])[0].name;
    // 첫번째와 마지막 메뉴가 아니고, 서브메뉴가 없는 모든 메인 메뉴들
    return <Title key={mainTitle} subTitle={subTitle} mainTitle={mainTitle} />;
  }
  // 서브 메뉴일때
  else {
    let subTitleObj = menuInfo.filter((menu) => menu.chapter === slug[0])[0];
    mainTitle = menuInfo
      .filter((menu) => menu.chapter === slug[0])[0]
      .submenu.filter((item) => item.number === Number(slug[1]))[0].name;
    subTitle2 = [subTitleObj.chapter, subTitleObj.name];
    return (
      <Title
        key={subTitle2[0] + subTitle2[1]}
        subTitle={subTitle}
        subTitle2={subTitle2}
        mainTitle={mainTitle}
      />
    );
  }
};

const matchContents = (slug: string | string[]) => {
  const resultMatchTitle = matchTitle(slug);
  const resultMatchVideo = matchVideo(slug);

  return [resultMatchTitle, resultMatchVideo];
};

const View = () => {
  const router = useRouter();
  let slug = router.query.slug || [];
  return <LayoutSection>{matchContents(slug)}</LayoutSection>;
};

export default View;
