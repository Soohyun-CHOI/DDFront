import Content from "./Content";
import Title from "./Title";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./styles/overview.module.scss";
import { LolOverview } from "./OverviewList";
import { ProjectList } from "../common/ProjectList";

const overviewSwitch = (project: string) => {
  switch (project) {
    case "lol":
      return (
        <>
          <Title
            project={project}
            subTitle={LolOverview[0].subTitle}
            mainTitle={LolOverview[0].mainTitle}
          />
          <Content
            contentTitle={LolOverview[1].contentTitle0}
            contentDetail={LolOverview[1].contentDetail0}
          />
          <Content
            contentTitle={LolOverview[2].contentTitle1}
            contentDetail={LolOverview[2].contentDetail1}
          />
          <Content
            contentTitle={LolOverview[3].contentTitle2}
            contentDetail={LolOverview[3].contentDetail2}
          />
          <Content
            contentTitle={LolOverview[4].contentTitle3}
            contentDetail={LolOverview[4].contentDetail3}
          />
          {/* 추후에 구글 드라이브 다운로드 링크 고쳐야 함 */}
          <Link
            href={`https://drive.google.com/drive/folders/0B7GVZ0YGMP0VfkdsTmc3ZWRoLWlhb0pSSUI2dGt3WW5yOVgwUy1vSW1oM244UFFNNTJSdk0?usp=sharing`}
          >
            <a className={styles.download_btnWrap}>
              <div className={styles.download_btn}>다운로드</div>
            </a>
          </Link>
          <Content
            contentTitle={LolOverview[5].contentTitle4}
            contentDetail={LolOverview[5].contentDetail4}
            isContentImage={true} // 난이도 나타내는 이미지가 들어가는 컨텐츠인지
            difficulty_num={LolOverview[5].difficultyNum}
          />
          <Content
            contentTitle={LolOverview[6].contentTitle5}
            contentDetail={LolOverview[6].contentDetail5}
          />
          <Link href={`/${project}/01`}>
            <a className={styles.start_btnWrap}>
              <div className={styles.start_btn}>시작하기</div>
            </a>
          </Link>
        </>
      );
    default:
      return null;
  }
};

const Overview = () => {
  const router = useRouter();
  const project = ProjectList.filter((name) => router.asPath.includes(name))[0];
  return overviewSwitch(project);
};
export default Overview;
