import styles from "./styles/BodyDescription.module.scss";
import { Lolbody_description } from "./BodyContentList";

interface BodyDescriptionProps {
  slug: string | string[];
  isSubmenu?: boolean;
}

const BodyDescription = ({ slug, isSubmenu }: BodyDescriptionProps) => (
  <div className={styles.Lolbody_description}>
    {!isSubmenu
      ? Lolbody_description.filter(
          (item) => item.chapter === slug[0]
        )[0]?.description.map((item) => `- ${item}\n`)
      : Lolbody_description.filter((item) => item.chapter === slug[0])[0]
          ?.submenu.filter((item) => String(item.number) === slug[1])[0]
          ?.description.map((item) => `- ${item}\n`)}
  </div>
);

export default BodyDescription;
