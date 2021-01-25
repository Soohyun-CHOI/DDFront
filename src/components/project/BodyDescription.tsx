import styles from "./styles/BodyDescription.module.scss";
import { useRouter } from "next/router";
import { Lolbody_description } from "./BodyContentList";
import { ProjectList } from "../common/ProjectList";

interface BodyDescriptionProps {
  slug: string | string[];
  isSubmenu?: boolean;
}

const matchDesStyles = (project: string) => {
  switch (project) {
    case "lol":
      return styles.Lolbody_description;
    default:
      return null;
  }
};

const matchDesObj = (project: string) => {
  switch (project) {
    case "lol":
      return Lolbody_description;
    default:
      return null;
  }
};

const descriptionSwitch = (
  project: string,
  slug: string | string[],
  isSubmenu: boolean
) => {
  return (
    <div className={matchDesStyles(project)}>
      {!isSubmenu
        ? matchDesObj(project)
            .filter((item) => item.chapter === slug[0])[0]
            ?.description.map((item) => `- ${item}\n`)
        : matchDesObj(project)
            .filter((item) => item.chapter === slug[0])[0]
            ?.submenu.filter((item) => String(item.number) === slug[1])[0]
            ?.description.map((item) => `- ${item}\n`)}
    </div>
  );
};

const BodyDescription = ({ slug, isSubmenu }: BodyDescriptionProps) => {
  const router = useRouter();
  const project = ProjectList.filter((name) => router.asPath.includes(name))[0];
  return descriptionSwitch(project, slug, isSubmenu);
};

export default BodyDescription;
