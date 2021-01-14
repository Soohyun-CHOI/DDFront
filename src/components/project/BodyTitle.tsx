import styles from "./styles/BodyTitle.module.scss";
import { body_title } from "./BodyContentList";

interface BodyTitleProps {
  slug: string | string[];
  isSubmenu?: boolean;
}

const BodyTitle = ({ slug, isSubmenu }: BodyTitleProps) => (
  <div className={styles.body_title}>
    {!isSubmenu
      ? body_title.filter((item) => item.chapter === slug[0])[0]?.title
      : body_title
          .filter((item) => item.chapter === slug[0])[0]
          ?.submenu.filter((item) => "0" + String(item.number) === slug[1])[0]
          ?.title}
  </div>
);

export default BodyTitle;
