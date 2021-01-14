import styles from "./styles/BodyTitle.module.scss";
import { Lolbody_title } from "./BodyContentList";

interface BodyTitleProps {
  slug: string | string[];
  isSubmenu?: boolean;
}

const BodyTitle = ({ slug, isSubmenu }: BodyTitleProps) => (
  <div className={styles.Lolbody_title}>
    {!isSubmenu
      ? Lolbody_title.filter((item) => item.chapter === slug[0])[0]?.title
      : Lolbody_title.filter(
          (item) => item.chapter === slug[0]
        )[0]?.submenu.filter((item) => String(item.number) === slug[1])[0]
          ?.title}
  </div>
);

export default BodyTitle;
