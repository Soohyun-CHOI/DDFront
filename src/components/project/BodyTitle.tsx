import styles from "./styles/BodyTitle.module.scss";
import { useRouter } from "next/router";
import { Lolbody_title } from "./BodyContentList";

interface BodyTitleProps {
  slug: string | string[];
  isSubmenu?: boolean;
}

const matchTitleStyles = (project: string) => {
  switch (project) {
    case "lol":
      return styles.Lolbody_title;
    default:
      return null;
  }
};

const matchTitleObj = (project: string) => {
  switch (project) {
    case "lol":
      return Lolbody_title;
    default:
      return null;
  }
};

const titleSwitch = (
  project: string,
  slug: string | string[],
  isSubmenu: boolean
) => {
  return (
    <div className={matchTitleStyles(project)}>
      {!isSubmenu
        ? matchTitleObj(project).filter((item) => item.chapter === slug[0])[0]
            ?.title
        : matchTitleObj(project)
            .filter((item) => item.chapter === slug[0])[0]
            ?.submenu.filter((item) => String(item.number) === slug[1])[0]
            ?.title}
    </div>
  );
};

const BodyTitle = ({ slug, isSubmenu }: BodyTitleProps) => {
  const router = useRouter();
  const project = router.pathname
    .replace(/\//gi, "")
    .replace("[[...slug]]", "");
  return titleSwitch(project, slug, isSubmenu);
};

export default BodyTitle;
