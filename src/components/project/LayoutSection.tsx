import styles from "./styles/LayoutSection.module.scss";
import Menu from "./Menu";
import { useRouter } from "next/router";
import Remocon from "./Remocon";
import { LolmenuInfo } from "./Menulist";
import { ProjectList } from "../common/ProjectList";

interface Props {
  children: React.ReactNode;
}

// 프로젝트 마다 Menu를 다르게 구성할 수 있음
const projectSwitch = (project: string) => {
  switch (project) {
    case "lol":
      const lolMenu = [...Array(LolmenuInfo.length)].map((item, index) => (
        <Menu key={index} menuInfo={LolmenuInfo[index]} />
      ));
      return lolMenu;
    default:
      return null;
  }
};

const LayoutSection = ({ children }: Props) => {
  const router = useRouter();
  const project = ProjectList.filter((name) => router.asPath.includes(name))[0];
  return (
    <>
      <div className={styles.section_wrap}>
        <div className={styles.section_left}>{children}</div>
        <div className={styles.section_right}>
          <Remocon>{projectSwitch(project)}</Remocon>
        </div>
      </div>
    </>
  );
};

export default LayoutSection;
