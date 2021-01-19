import { useRouter } from "next/router";
import LayoutSection from "../../src/components/project/LayoutSection";
import Overview from "../../src/components/project/overview";
import Title from "../../src/components/project/Title";
import { LolmenuInfo } from "../../src/components/project/Menulist";
import Video from "../../src/components/project/Video";
import BodyTitle from "../../src/components/project/BodyTitle";
import BodyDescription from "../../src/components/project/BodyDescription";
import BodyCodebox from "../../src/components/project/BodyCodebox";
import { Lolbody_codebox } from "../../src/components/project/BodyContentList";
import Togglebutton from "../../src/components/project/Togglebutton";
import FileDropzone from "../../src/components/project/FileDropzone";
import { Lolbody_video } from "../../src/components/project/BodyContentList";

const subTitle = "LOL 승패 예측 프로젝트";
let subTitle2;
let mainTitle;

const matchVideo = (slug: string | string[]): JSX.Element => {
  const mainMenuObj = Lolbody_video.filter(
    (Obj) => Obj?.chapter === slug[0]
  )[0];
  const subMenuObj = mainMenuObj?.submenu?.filter(
    (Obj) => Obj.number === Number(slug[1])
  )[0];
  // 메인 메뉴에서 Video 컴포넌트를 사용해야 할 때
  if (slug.length === 1) {
    // 메인 메뉴에 비디오가 존재할 경우
    if (mainMenuObj?.video) {
      return <Video key={Math.random().toString(36)} />;
    }
    return null;
  }
  // 서브 메뉴에서 Video 컴포넌트를 사용해야 할 때
  if (slug.length === 2) {
    // 서브 메뉴에 비디오가 존재할 경우
    if (subMenuObj?.video) {
      return <Video key={Math.random().toString(36)} />;
    }
    return null;
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
        "+" + LolmenuInfo[LolmenuInfo.length - 1].chapter.toUpperCase(),
        LolmenuInfo[LolmenuInfo.length - 1].name,
      ];
      return (
        <Title
          key="plusmenu"
          project={LolmenuInfo[0].project}
          subTitle={subTitle}
          subTitle2={subTitle2}
          mainTitle="직접 해보는 LOL 승패 예측"
        />
      );
    }
    mainTitle = LolmenuInfo.filter((menu) => menu.chapter === slug[0])[0]?.name;
    // 첫번째와 마지막 메뉴가 아니고, 서브메뉴가 없는 모든 메인 메뉴들
    return (
      <Title
        key={mainTitle}
        project={LolmenuInfo[0].project}
        subTitle={subTitle}
        mainTitle={mainTitle}
      />
    );
  }
  // 서브 메뉴일때
  else {
    let subTitleObj = LolmenuInfo.filter((menu) => menu.chapter === slug[0])[0];
    mainTitle = LolmenuInfo.filter(
      (menu) => menu.chapter === slug[0]
    )[0].submenu.filter((item) => item.number === Number(slug[1]))[0].name;
    subTitle2 = [subTitleObj.chapter, subTitleObj.name];
    return (
      <Title
        key={subTitle2[0] + subTitle2[1]}
        project={LolmenuInfo[0].project}
        subTitle={subTitle}
        subTitle2={subTitle2}
        mainTitle={mainTitle}
      />
    );
  }
};

const matchBody = (slug: string | string[]) => {
  // 경로 배열을 담은 slug를 slugArr 변수에 담음
  let slugArr = slug;
  // 메인 메뉴일 때(overview 메뉴 제외)
  if (slug.length === 1) {
    // 맨 마지막 메뉴(plus) 일때
    if (slug[0] === "plus") {
      return <FileDropzone />;
    } else {
      return (
        <>
          <BodyTitle
            key={slug[0] + Math.random().toString(30)}
            slug={slugArr}
          />
          <BodyDescription
            key={slug[0] + Math.random().toString(30)}
            slug={slugArr}
          />
          {Lolbody_codebox.filter(
            (item) => item.chapter === slug[0] && item.codebox === true
          )[0] ? (
            <BodyCodebox key={slug[0] + Math.random().toString(30)} />
          ) : null}
          <Togglebutton
            key={slug[0] + Math.random().toString(30)}
            slug={slugArr}
          />
        </>
      );
    }
  }

  // 서브 메뉴일 때
  if (slug.length === 2) {
    return (
      <>
        <BodyTitle
          key={slug[0] + slug[1] + Math.random().toString(32)}
          slug={slugArr}
          isSubmenu={true}
        />
        <BodyDescription
          key={slug[0] + slug[1] + Math.random().toString(32)}
          slug={slugArr}
          isSubmenu={true}
        />
        {Lolbody_codebox.filter(
          (item) => item.chapter === slug[0] && item.codebox === false
        )[0]?.submenu.filter(
          (item) => String(item.number) === slug[1] && item.codebox === true
        )[0] ? (
          <BodyCodebox key={slug[0] + slug[1] + Math.random().toString(32)} />
        ) : null}
        <Togglebutton
          key={slug[0] + Math.random().toString(30)}
          slug={slugArr}
          isSubmenu={true}
        />
      </>
    );
  }
};

const matchContents = (slug: string | string[]) => {
  const resultMatchTitle = matchTitle(slug);
  const resultMatchVideo = matchVideo(slug);
  const resultMatchBody = matchBody(slug);

  return [resultMatchTitle, resultMatchVideo, resultMatchBody];
};

const View = () => {
  const router = useRouter();
  let slug = router.query.slug || [];
  return <LayoutSection>{matchContents(slug)}</LayoutSection>;
};

export default View;
