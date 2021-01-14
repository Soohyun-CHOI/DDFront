import styles from "./styles/BodyDescription.module.scss";
import { body_description } from "./BodyContentList";

interface BodyDescriptionProps {
  slug: string | string[];
  isSubmenu?: boolean;
}

const BodyDescription = ({ slug, isSubmenu }: BodyDescriptionProps) => (
  <div className={styles.body_description}>
    {!isSubmenu
      ? body_description
          .filter((item) => item.chapter === slug[0])[0]
          ?.description.map((item) => `- ${item}\n`)
      : body_description
          .filter((item) => item.chapter === slug[0])[0]
          ?.submenu.filter((item) => "0" + String(item.number) === slug[1])[0]
          ?.description.map((item) => `- ${item}\n`)}
  </div>
);

export default BodyDescription;
